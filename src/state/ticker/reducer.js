import { createSlice } from "@reduxjs/toolkit"
import { getOpenClose } from "./actions" 

const initialState = {
  isLoading: false,
  data: [],
  error: false,
}

const tickerReducer = createSlice({
  name: 'ticker',
  initialState,
  reducers: {},
  extraReducers: {
    [getOpenClose.pending]: (state) => {
      state.isLoading = true
    },
    [getOpenClose.fulfilled]: (state, { payload }) => {
      state.isLoading = true
      state.data = payload
    },
    [getOpenClose.rejected]: (state, { payload }) => {
      state.error = payload.error
    }
  }
})

const { reducer } = tickerReducer

export default reducer;