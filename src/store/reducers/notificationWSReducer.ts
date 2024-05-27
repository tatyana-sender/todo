import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: { notificationsWS: any[] } = {
  notificationsWS: [],
};

const notificationWSSlice = createSlice({
  name: 'notificationsWS',
  initialState,
  reducers: {
    setNotification: (state, action: PayloadAction<any>) => {
      state.notificationsWS.push(action.payload)
    }
  },
});

export const { setNotification } = notificationWSSlice.actions;

export default notificationWSSlice.reducer;
