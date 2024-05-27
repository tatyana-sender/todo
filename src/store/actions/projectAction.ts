import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL, PROJECTS_PATH } from '@/constants/global';

export const fetchProjects: any = createAsyncThunk('projects/fetchProjects', async () => {
	const response = await axios.get(`${API_URL}/${PROJECTS_PATH}`);
	return response.data;
})

export const addProject: any = createAsyncThunk('projects/addProject', async (projectData: any) => {
	const response = await axios.post(`${API_URL}/${PROJECTS_PATH}`, projectData);
	return response.data;
});

export const deleteProject: any = createAsyncThunk('projects/deleteProject', async (id: string) => {
	const response = await axios.delete(`${API_URL}/${PROJECTS_PATH}/${id}`);
	return response.data;
});

export const editProject: any = createAsyncThunk('projects/editProject', async (projectData: any) => {
	const response = await axios.put(`${API_URL}/${PROJECTS_PATH}/${projectData.id}`, projectData);
	return response.data;
});
