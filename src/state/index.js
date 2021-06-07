
import { combineReducers } from "redux"
import tickersReducer from "./tickers/reducer"
import tickerReducer from "./ticker/reducer"

export default combineReducers({
  tickers: tickersReducer,
  ticker: tickerReducer
})