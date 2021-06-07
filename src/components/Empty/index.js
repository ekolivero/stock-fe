import EmptyImage from "@assets/financial.png"

const Empty = () => (
  <div className="container__empty">
    <img src={EmptyImage} className="container__empty--img" alt="No data yet"/>
    <div className="container__empty--rfa">
      Select some stocks on the left side for see details ...
    </div>
  </div>
)

export default Empty