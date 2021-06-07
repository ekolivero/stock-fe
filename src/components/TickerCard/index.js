import { NavLink } from "react-router-dom";

export const TickerCard = ({
  ticker: { ticker, name, primary_exchange, last_updated_utc },
}) => {
  return (
    <NavLink
      to={ticker}
      className="container__ticker"
      activeClassName="container__ticker--selected"
    >
      <div className="container__ticker__info">
        <div className="container__ticker__info--ticker">{ticker}</div>
        <div className="container__ticker__info--name">{name}</div>
      </div>
      <div className="container__ticker__exchange">
        <div className="container__ticker__exchange--exchange">
          {primary_exchange}
        </div>
        <div className="container__ticker__exchange--market">Market</div>
      </div>
      <div className="container__ticker__data">
        <div className="container__ticker__data--time">Last Update</div>
        <div className="container__ticker__data--utc">{last_updated_utc}</div>
      </div>
    </NavLink>
  );
};

export default TickerCard;
