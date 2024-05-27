import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '@/store/reducers';
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['modal/showModal'],
        ignoredPaths: ['modal.modalContent'],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;