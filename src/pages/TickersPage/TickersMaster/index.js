import InfiniteScroll from "react-infinite-scroll-component"
import { useAppState } from "@hooks"
import { getTickers, getNextTickers } from "@state/tickers/actions"
import { TickerCard } from "@components"

const TickersMaster = () => {

  const [
    {
      tickers: {
        next_url,
        tickers,
        isLoading
      }
    },
    actions
  ] = useAppState(state => state, { getTickers, getNextTickers })


  const handleChange = (e) => {
    e.preventDefault();
    actions.getTickers(e.target.value)
  }

  const loadMore = () => {
    actions.getNextTickers(next_url)
  }

  return (
    <div className="container__master">
      <div className="container__master__input">
        <input 
          className="container__master__input--input" 
          placeholder="Search for Tickers"
          onChange={handleChange}
        />
      </div>
      {!!tickers ? (
        <div className="container__master__scroller" id="scrollableDiv">
        <InfiniteScroll
          dataLength={tickers.length}
          next={loadMore}
          hasMore={!!next_url}
          loader={<div className="spin"> Spin </div>}
          scrollableTarget="scrollableDiv"
        >
          {tickers.map(ticker => <TickerCard ticker={ticker} key={ticker.ticker}/>)}
        </InfiniteScroll>
      </div>
      ) : (
        <div className="container__master__empty"> There are no tickers for your search :( </div>
      )}
    </div>
  )
}

export default TickersMaster;