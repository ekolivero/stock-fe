
import { combineReducers } from "redux"
import tickersReducer from "./tickers/reducer"

export default combineReducers({
  tickers: tickersReducer,
})