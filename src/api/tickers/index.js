import { client } from "../index"

export const fetchInitialTickers = (search) => {
  return client.get('https://api.polygon.io/v3/reference/tickers', {
    params: {
      search: search,
      limit: 20
    }
  })
}

export const fetchNextTickers = (next_url) => {
  return client.get(next_url)
}

