import { createSlice } from '@reduxjs/toolkit'

interface GeneralAction<T> {
  isLoading : boolean
  data?     : T
  error?    : string
}

export interface ChatState {
  chatResource     : GeneralAction<string>
}

const initialState: ChatState = {
  chatResource: {
    isLoading: false
  }
}

export const chatSlice = createSlice({
  name: 'syllabus',
  initialState,
  reducers: {
    getChatResource: (state) => {
      state.chatResource.isLoading = true
    },
    getChatResourceSuccess: (state) => {
      state.chatResource.isLoading = false
    },
    getChatResourceError: (state) => {
      state.chatResource.isLoading = false
    }
  }
})

export const {
  getChatResource,
  getChatResourceSuccess,
  getChatResourceError
} = chatSlice.actions
export default chatSlice.reducer
