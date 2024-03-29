import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './slices/userSlice'
import { signUpSlice } from './slices/signUpSlice'

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    signUp: signUpSlice.reducer
  },
})