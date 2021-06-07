import { createAsyncThunk } from "@reduxjs/toolkit"
import * as tickersAPI from "@api/tickers"

export const getTickers = createAsyncThunk(
  'state/tickers/GET_TICKERS',
  async (search = undefined, thunkAPI) => {
    try {
      const { data: tickersList } = await tickersAPI.fetchInitialTickers(search)

      return { ...tickersList }
    } catch (err) {
      return thunkAPI.rejectWithValue({ error: err.message })
    }
  }
)

export const getNextTickers = createAsyncThunk(
  'state/tickers/GET_NEXT_TICKERS',
  async (next_url, thunkAPI) => {
    try {
      const { data: tickersList } = await tickersAPI.fetchNextTickers(next_url)

      return { ...tickersList }
    } catch (err) {
      return thunkAPI.rejectWithValue({ error: err.message })
    }
  }
)