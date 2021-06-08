import { createAsyncThunk } from "@reduxjs/toolkit";
import * as tickerAPI from "@api/ticker";
import moment from "moment-business-days";

moment.updateLocale("it", {
  workingWeekdays: [1, 2, 3, 4, 5],
});

export const getOpenClose = createAsyncThunk(
  "state/ticker/GET_OPEN_CLOSE",
  async (ticker, thunkAPI) => {
    try {
      let x;
      let workingDays = [];
      // Little code for get the last 3 working days before today.
      for (x = 1; x < 4; x++) {
        const temp = moment(new Date()).businessSubtract(x);
        if (moment(temp).isBusinessDay()) {
          workingDays.push(moment(temp._d).format("YYYY-MM-DD"));
        }
      }

      const response = await Promise.all(
        workingDays.map(async (date) => {
          const { data } = await tickerAPI.fetchOpenCloseForTicker(
            date,
            ticker
          );
          return data;
        })
      );

      return response;
    } catch (err) {
      return thunkAPI.rejectWithValue({ error: err.message });
    }
  }
);
