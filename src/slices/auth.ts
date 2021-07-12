import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from '../types/props'

export interface SignInSlice {
  isLoading : boolean
  data?     : User
  error?    : string
}

export interface AuthState {
  isAuth: boolean
  signIn: SignInSlice
}

const initialState: AuthState = {
  isAuth: false,
  signIn: {
    isLoading: false
  }
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn: state => {
      // do some action with the state
      state.signIn = {
        isLoading: true
      }
    },
    signInSuccess: (state, action: PayloadAction<User>) => {
      // do some action with the state
      alert(`Names: ${action.payload.names}, Lastnames: ${action.payload.lastnames}, Email: ${action.payload.email}`)

      state.signIn = {
        isLoading: false,
        data: action.payload
      }
    },
    signInError: (state, action: PayloadAction<string>) => {
      // do some action with the state
      state.signIn = {
        isLoading: false,
        error: action.payload
      }
    }
  }
})

export const {
  signIn,
  signInSuccess,
  signInError
} = authSlice.actions
export default authSlice.reducer