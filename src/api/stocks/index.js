import { client } from "../index"

export const getTicker = () => {
  return client.get('/v3/reference/tickers', {
    params: {
      search: 'AGM'
    }
  })
}

