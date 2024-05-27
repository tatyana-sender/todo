import { createSlice } from '@reduxjs/toolkit';
import { NotificationState } from '@/types/notification';
import { deleteNotification, editNotification, fetchNotifications } from '@/store/actions/notificationActions';

const initialState: NotificationState = {
  notifications: [],
  loading: false,
  error: null
};

const notificationSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotifications.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchNotifications.fulfilled, (state, action) => {
        state.loading = false;
        state.notifications = action.payload;
      })
      .addCase(fetchNotifications.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Something went wrong';
      })
      .addCase(deleteNotification.fulfilled, (state, action) => {
        state.loading = false;
        state.notifications = state.notifications.filter((notification) => notification.id !== action.meta.arg);
      })
      .addCase(deleteNotification.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Something went wrong';
      })
      .addCase(editNotification.fulfilled, (state, action) => {
        state.loading = false;
        state.notifications = state.notifications.map((notification) => {
          if (notification.id == action.payload.id) {
            notification.status = 'read';
            return notification;
          } else {
            return notification;
          }
        });
      })
      .addCase(editNotification.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Something went wrong';
      })
  },
});

export default notificationSlice.reducer;
