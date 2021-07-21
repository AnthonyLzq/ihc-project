import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Keyboard } from 'react-native'
import { User } from '../types/props'

export interface GeneralAction {
  isLoading : boolean
  data?     : User
  error?    : string
}

export interface AuthState {
  isAuth: boolean
  signUp: GeneralAction,
  signIn: GeneralAction
}

const initialState: AuthState = {
  isAuth: false,
  signUp: {
    isLoading: false
  },
  signIn: {
    isLoading: false
  }
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signUp: (state) => {
      Keyboard.dismiss()
      
      state.signUp = {
        isLoading: true
      }
    },
    signUpSuccess: (state) => {
      state.signUp = {
        isLoading: false,
      }
    },
    signUpError: (state, action: PayloadAction<string>) => {
      state.signUp = {
        isLoading: false,
        error: action.payload
      }
    }
  }
})

export const {
  signUp,
  signUpSuccess,
  signUpError
} = authSlice.actions
export default authSlice.reducer