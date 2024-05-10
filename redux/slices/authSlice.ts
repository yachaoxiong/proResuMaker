import { User } from '@/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AuthState {
  user: User | null
}

// Create initial state
const initialState: AuthState = {
  user: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<User>) {
      state.user = action.payload
    },
    logout(state) {
      state.user = null
    },
  },
})

export const { login, logout } = authSlice.actions
export const selectAuth = (state: { auth: AuthState }) => state.auth
export default authSlice.reducer
