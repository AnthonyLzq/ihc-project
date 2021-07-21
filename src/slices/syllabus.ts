import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Syllabus } from '../types/props'

interface GeneralAction<T> {
  isLoading : boolean
  data?     : T
  error?    : string
}

export interface SyllabusState {
  initialSyllabus: GeneralAction<Syllabus[]>
}

const initialState: SyllabusState = {
  initialSyllabus: {
    isLoading: false
  }
}

export const syllabusSlice = createSlice({
  name: 'syllabus',
  initialState,
  reducers: {
    getInitialSyllabus: (state) => {
      state.initialSyllabus.isLoading = true
    },
    getInitialSyllabusSuccess: (state, action: PayloadAction<Syllabus[]>) => {
      state.initialSyllabus = {
        isLoading: false,
        data: action.payload
      }
    },
    getInitialSyllabusError: (state, action: PayloadAction<string>) => {
      state.initialSyllabus = {
        isLoading: false,
        error: action.payload
      }
    }
  }
})

export const {
  getInitialSyllabus,
  getInitialSyllabusSuccess,
  getInitialSyllabusError
} = syllabusSlice.actions
export default syllabusSlice.reducer