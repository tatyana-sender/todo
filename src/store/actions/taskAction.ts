import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL, TASKS_PATH } from '@/constants/global';

export const fetchTasks: any = createAsyncThunk('tasks/fetchTasks', async () => {
	const response = await axios.get(`${API_URL}/${TASKS_PATH}`);
	return response.data;
})

export const addTask: any = createAsyncThunk('tasks/addTask', async (taskData: any) => {
	const response = await axios.post(`${API_URL}/${TASKS_PATH}`, taskData);
	return response.data;
});

export const deleteTask: any = createAsyncThunk('tasks/deleteTask', async (id: string) => {
	const response = await axios.delete(`${API_URL}/${TASKS_PATH}/${id}`);
	return response.data;
});

export const editTask: any = createAsyncThunk('tasks/editTask', async (taskData: any) => {
	await axios.put(`${API_URL}/${TASKS_PATH}/${taskData.id}`, taskData);
	return taskData;
});
