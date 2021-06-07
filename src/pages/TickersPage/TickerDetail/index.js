import { Empty } from "@components";
import { useAppState } from "@hooks";
import { useParams } from "react-router-dom";
import { getOpenClose } from "@state/ticker/actions";
import { useEffect } from "react";
import moment from "moment"

const TickerDetail = () => {
  const { ticker } = useParams();
  const [
    {
      tickers: { loaded },
      ticker: { data }
    },
    actions,
  ] = useAppState((state) => state, { getOpenClose });

  useEffect(() => {
    if (!loaded) return;
    actions.getOpenClose(ticker);
  }, [ticker]);

  return (
    <div className="ticker__container">
      <div className="ticker__container__title">
        { ticker }
      </div>
      <div className="ticker__container__border" />

      { data.map((history, index) => {
          const {
            from: date,
            close,
            open,
            low,
            height,
            volume,
            preMarket,
          } = history

          return (
            <div className="ticker__container__history" key={index}>
              <div className="ticker__container__history--date">
                { moment(date).format("MMM Do YY") }:
              </div>
              <div className="ticker__container__history__summary">
                <div className="ticker__container__history__summary--label">
                  Prev Close 
                </div>
                <div className="ticker__container__history__summary--value">
                  { preMarket }
                </div>
              </div>
              <div className="ticker__container__history__summary">
                <div className="ticker__container__history__summary--label">
                  Open
                </div>
                <div className="ticker__container__history__summary--value">
                  { open }
                </div>
              </div>
              <div className="ticker__container__history__summary">
                <div className="ticker__container__history__summary--label">
                  Close
                </div>
                <div className="ticker__container__history__summary--value">
                  { close }
                </div>
              </div>
              <div className="ticker__container__history__summary">
                <div className="ticker__container__history__summary--label">
                  Low
                </div>
                <div className="ticker__container__history__summary--value">
                  { low }
                </div>
              </div>
              <div className="ticker__container__history__summary">
                <div className="ticker__container__history__summary--label">
                  Height
                </div>
                <div className="ticker__container__history__summary--value">
                  { height }
                </div>
              </div>
              <div className="ticker__container__history__summary">
                <div className="ticker__container__history__summary--label">
                  Volume
                </div>
                <div className="ticker__container__history__summary--value">
                  { volume }
                </div>
              </div> 
            </div>
          )

        })}
    </div>
  )
};

export default TickerDetail;
