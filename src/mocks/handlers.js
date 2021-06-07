import { rest } from "msw";
import tickers from "./tickers/tickers.json";

const basePath = "https://api.polygon.io";

const getRandomNumber = (min, max, fixed = 2) => {
  return (Math.random() * (max - min) + min).toFixed(fixed)
}

export const handlers = [
  //This is a sample for handling mocked pagination with version v2
  rest.get(`${basePath}/v2/reference/tickers`, (req, res, ctx) => {
    let data;

    const page = parseInt(req.url.searchParams.get("page")) || 1;
    const per_page = parseInt(req.url.searchParams.get("perpage")) || 30;

    const { tickers: tickersData } = tickers;

    const isFirstPage = page === 1 ? true : false;

    data = tickersData.slice(
      isFirstPage ? 0 : page * per_page,
      isFirstPage ? per_page : page * per_page
    );

    return res(
      ctx.status(200),
      ctx.json({
        page: 1,
        count: 126088,
        perPeage: 50,
        status: "OK",
        ...data,
      })
    );
  }),

  //Mock data with api v3
  rest.get(`${basePath}/v3/reference/tickers`, (req, res, ctx) => {
    const cursor = req.url.searchParams.get("cursor") || 1;
    const search = req.url.searchParams.get("search");

    if (!!search) {
      const { tickers: listTickers } = require("./tickers/tickers.json");

      const filteredTickers = listTickers.filter(
        (ticker) =>
          ticker.ticker.includes(search) || ticker.name.includes(search)
      );

      return res(
        ctx.status(200),
        ctx.json({
          results: filteredTickers.length > 0 ? Array(...filteredTickers) : null,
          status: "OK",
          request_id: "5006ee93404846e2838f8781797e2ad6",
          count: filteredTickers.length,
          next_url: filteredTickers.length > 0 ? "https://api.polygon.io:443/v3/reference/tickers?cursor=2" : null,
        })
      );
    }

    const tickers = require(`./tickers/v3/mock_${cursor}.json`);

    return res(
      ctx.status(200),
      ctx.json({
        ...tickers,
      })
    );
  }),

  rest.get(`${basePath}/v1/open-close/:ticker/:date`, (req, res, ctx) => {
    const { ticker } = req.params
    const { date } = req.params

    return res(
      ctx.json({
        afterHours: getRandomNumber(100, 200),
        close: getRandomNumber(100, 200),
        from: date,
        high: getRandomNumber(100, 200),
        low: getRandomNumber(100, 150),
        open: getRandomNumber(100, 200),
        preMarket: getRandomNumber(100, 200),
        status: "OK", 
        symbol: ticker,
        volume: getRandomNumber(40000, 900000, 0),
      })
    )
  })
];
