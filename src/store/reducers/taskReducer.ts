import { createSlice } from '@reduxjs/toolkit';
import { TaskState } from '@/types/task';
import { addTask, deleteTask, editTask, fetchTasks } from '@/store/actions/taskAction';

const initialState: TaskState = {
  tasks: [],
  loading: false,
  error: null
}

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Something went wrong';
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks.push(action.payload);
      })
      .addCase(addTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Something went wrong';
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
      })
      .addCase(deleteTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Something went wrong';
      })
      .addCase(editTask.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = state.tasks.map((task) => {
          if (task.id == action.payload.id) {
            task.title = action.payload.title;
            task.description = action.payload.description;
            task.deadline = action.payload.deadline;
            task.project = action.payload.project;
            task.status = action.payload.status;
          }
          return task;
        });
      })
      .addCase(editTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Something went wrong';
      })
  },
});

export default taskSlice.reducer;