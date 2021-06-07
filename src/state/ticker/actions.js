import { createAsyncThunk } from "@reduxjs/toolkit";
import * as tickerAPI from "@api/ticker";
import moment from "moment-business-days"

moment.updateLocale('it', {
  workingWeekdays: [1,2,3,4,5]
})

export const getOpenClose = createAsyncThunk(
  "state/ticker/GET_OPEN_CLOSE",
  async (ticker, thunkAPI) => {
    try {
      const lastSevenDays = [...Array(3)].map((_, i) => {
        const d = moment(new Date()).prevBusinessDay()._d;
        d.setDate(d.getDate() - i);
        return d.toISOString().slice(0,10);
      });

      const response = await Promise.all(
        lastSevenDays.map(async (date) => {
          const { data } = await tickerAPI.fetchOpenCloseForTicker(date, ticker)
          return data
        })
      )

      return response

    } catch (err) {
      return thunkAPI.rejectWithValue({ error: err.message })
    }
  }
);
