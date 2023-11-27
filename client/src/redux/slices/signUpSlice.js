import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  signUpEmailValue: '',
  signUpNameValue: '',
  signUpPasswordValue: ''
}

export const signUpSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateSignUpNameValue: (state, action) => {
        state.signUpNameValue = action.payload
    },
    updateSignUpEmailValue: (state, action) => {
        state.signUpEmailValue = action.payload
    },
    updateSignUpPasswordValue: (state, action) => {
        state.signUpPasswordValue = action.payload
    },
    resetSignupValues: (state) => {
        state = initialState
    }
  },
})

export const { updateSignUpNameValue, updateSignUpEmailValue, updateSignUpPasswordValue, resetSignupValues } = signUpSlice.actions

export default signUpSlice