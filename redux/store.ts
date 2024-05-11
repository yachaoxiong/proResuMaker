import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slices/authSlice'
import resumeSlice from './slices/resumeSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice,
    resume: resumeSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
