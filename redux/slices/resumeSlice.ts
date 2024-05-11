import { Resume } from '@/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface resumeState {
  resume: Resume | null
}

// Create initial state
const initialState: resumeState = {
  resume: null,
}

const resumeSlice = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    login(state, action: PayloadAction<Resume>) {
      state.resume = action.payload
    },
    logout(state) {
      state.resume = null
    },
  },
})

export const { login, logout } = resumeSlice.actions
export const selectResume = (state: { resume: resumeState }) => state.resume
export default resumeSlice.reducer
