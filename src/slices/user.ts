import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Keyboard } from 'react-native'
import { Navigation, SelectCoursesBody, User } from '../types/props'

interface GeneralAction<T> {
  isLoading : boolean
  data?     : T
  error?    : string
}

export interface UserState {
  isAuth            : boolean
  signUp            : GeneralAction<any>,
  signIn            : GeneralAction<User>
  selectedSyllabus  : GeneralAction<User>
}

const initialState: UserState = {
  isAuth: false,
  signUp: {
    isLoading: false
  },
  signIn: {
    isLoading: false
  },
  selectedSyllabus: {
    isLoading: false
  }
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signUp: (state) => {
      Keyboard.dismiss()
      
      state.signUp.isLoading = true
    },
    signUpSuccess: (state) => {
      state.signUp.isLoading = false
    },
    signUpError: (state, action: PayloadAction<string>) => {
      state.signUp = {
        isLoading: false,
        error: action.payload
      }
    },
    signIn: (state) => {
      Keyboard.dismiss()
      state.signIn.isLoading = true
    },
    signInSuccess: (state, action: PayloadAction<User>) => {
      state.signIn = {
        isLoading: false,
        data: action.payload
      }
    },
    signInError: (state, action: PayloadAction<string>) => {
      state.signIn = {
        isLoading: false,
        error: action.payload
      }
    },
    selectSyllabus: (state, action: PayloadAction<SelectCoursesBody>) => {
      state.selectedSyllabus.isLoading = true
    },
    selectSyllabusSuccess: (state, action: PayloadAction<User>) => {
      state.selectedSyllabus.isLoading = false
      state.signIn.data = action.payload
    },
    selectSyllabusError: (state, action: PayloadAction<string>) => {
      state.selectedSyllabus = {
        isLoading: false,
        error: action.payload
      }
    }
  }
})

export const {
  signUp,
  signUpSuccess,
  signUpError,
  signIn,
  signInSuccess,
  signInError,
  selectSyllabus,
  selectSyllabusSuccess,
  selectSyllabusError
} = userSlice.actions
export default userSlice.reducer