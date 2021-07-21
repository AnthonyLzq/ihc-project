import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SelectCoursesBody, Syllabus } from '../types/props'

interface GeneralAction<T> {
  isLoading : boolean
  data?     : T
  error?    : string
}

export interface SyllabusState {
  initialSyllabus         : Syllabus[],
  allSyllabus             : GeneralAction<Syllabus[]>
  recommendedSyllabus     : GeneralAction<Syllabus[]>
}

const initialState: SyllabusState = {
  initialSyllabus: [],
  allSyllabus: {
    isLoading: false
  },
  recommendedSyllabus: {
    isLoading: false
  }
}

const selectNCoursesRandomly = (courses: Syllabus[], size: number = 6): Syllabus[] => {
  const randomIndexes = getDifferentRandomNumbers(size, courses.length)
  const selectedCourses = courses.filter((_, cIndex) => randomIndexes.includes(cIndex)) 

  return selectedCourses
}

const getDifferentRandomNumbers = (size: number, maxNumber: number) => {
  const randomNumbers: number[] = []

  while (randomNumbers.length < size) {
    const randomNumber = Math.floor(Math.random() * maxNumber)
    if (!randomNumbers.includes(randomNumber)) randomNumbers.push(randomNumber)
  }

  return randomNumbers
}

export const syllabusSlice = createSlice({
  name: 'syllabus',
  initialState,
  reducers: {
    getAllSyllabus: (state) => {
      state.allSyllabus.isLoading = true
    },
    getAllSyllabusSuccess: (state, action: PayloadAction<Syllabus[]>) => {
      state.initialSyllabus = selectNCoursesRandomly(action.payload)
      state.allSyllabus = {
        isLoading: false,
        data: action.payload
      }
    },
    getAllSyllabusError: (state, action: PayloadAction<string>) => {
      state.allSyllabus = {
        isLoading: false,
        error: action.payload
      }
    },
    getRecommendedSyllabus: (state, action: PayloadAction<SelectCoursesBody>) => {
      state.recommendedSyllabus.isLoading = true
    },
    getRecommendedSyllabusSuccess: (state, action: PayloadAction<Syllabus[]>) => {
      state.recommendedSyllabus = {
        isLoading: false,
        data: selectNCoursesRandomly(action.payload, 2)
      }
    },
    getRecommendedSyllabusError: (state, action: PayloadAction<string>) => {
      state.recommendedSyllabus = {
        isLoading: false,
        error: action.payload
      }
    }
  }
})

export const {
  getAllSyllabus,
  getAllSyllabusSuccess,
  getAllSyllabusError,
  getRecommendedSyllabus,
  getRecommendedSyllabusSuccess,
  getRecommendedSyllabusError
} = syllabusSlice.actions
export default syllabusSlice.reducer