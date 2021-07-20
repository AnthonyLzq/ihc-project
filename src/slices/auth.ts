import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Keyboard } from 'react-native'
import { User } from '../types/props'


interface UserSignInCredentials {
  email: string
  password: string
}
interface UserSignUpCredentials extends UserSignInCredentials {
  names: string
  lastnames: string
  navigation: any
}
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
    signUp: (state, action: PayloadAction<UserSignUpCredentials>) => {
      Keyboard.dismiss()
      
      // do some action with the state
      state.signUp = {
        isLoading: true
      }
    },
    signUpSuccess: (state, action: PayloadAction<any>) => {
      // do some action with the state
      alert(`Names: ${action.payload.names}, Lastnames: ${action.payload.lastnames}, Email: ${action.payload.email}, Password: ${action.payload.password}`)

      state.signUp = {
        isLoading: false,
        data: action.payload
      }
    },
    signUpError: (state, action: PayloadAction<string>) => {
      // do some action with the state
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