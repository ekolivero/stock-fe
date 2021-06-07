import { client } from "../index"

export const fetchOpenCloseForTicker = (ticker, date) => {
  return client.get(`https://api.polygon.io/v1/open-close/${date}/${ticker}`, {
    params: {
      unadjusted: true
    }
  })
}