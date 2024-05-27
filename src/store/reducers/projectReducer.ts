import { createSlice } from '@reduxjs/toolkit';
import { addProject, deleteProject, editProject, fetchProjects } from '@/store/actions/projectAction';
import { ProjectState } from '@/types/project';

const initialState: ProjectState = {
  projects: [],
  loading: false,
  error: null
}

const projectSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.loading = false;
        state.projects = action.payload;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Something went wrong';
      })
      .addCase(addProject.fulfilled, (state, action) => {
        state.loading = false;
        state.projects.push(action.payload);
      })
      .addCase(addProject.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Something went wrong';
      })
      .addCase(deleteProject.fulfilled, (state, action) => {
        state.loading = false;
        state.projects = state.projects.filter((project) => project.id !== action.payload.id);
      })
      .addCase(deleteProject.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Something went wrong';
      })
      .addCase(editProject.fulfilled, (state, action) => {
        state.loading = false;
        state.projects = state.projects.map((project) => {
          if (project.id == action.meta.arg.id) {
            project.title = action.meta.arg.title;
            project.description = action.meta.arg.description;
            project.deadline = action.meta.arg.deadline;
          }
          return project;
        });
      })
      .addCase(editProject.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Something went wrong';
      })
  },
});

export default projectSlice.reducer;