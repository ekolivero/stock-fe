import { createSlice } from "@reduxjs/toolkit"
import { getNextTickers, getTickers } from "./actions"

const initialState = {
  isLoading: false,
  next_url: undefined,
  tickers: [],
}

const tickersReducer = createSlice({
  name: 'tickers',
  initialState,
  reducers: {},
  extraReducers: {
    [getTickers.pending]: (state) => {
      state.isLoading = true
    },
    [getTickers.fulfilled]: (state, {payload}) => {
      state.isLoading = false
      state.tickers = payload.results
      state.next_url = payload.next_url
    },
    [getNextTickers.pending]: (state) => {
      state.isLoading = true
    },
    [getNextTickers.fulfilled]: (state, { payload }) => {
      state.isLoading = false
      state.tickers = state.tickers.concat(payload.results)
      state.next_url = payload.next_url
    }
  }
})

const { reducer } = tickersReducer

export default reducer;