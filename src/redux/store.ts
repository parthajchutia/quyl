import { configureStore } from '@reduxjs/toolkit';
import studentReducer from './features/studentSlice';

export const store = configureStore({
  reducer: {
    students: studentReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;