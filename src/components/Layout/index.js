import { Empty } from "@components"
import { Route } from "react-router-dom"

const Layout = (props) => {
  const {
    master: Master,
    detail: Detail,
    id,
  } = props


  return (
    <div className="container" id={id}>
      <div className="container__tickers-list">
        <Master />
      </div>
      <div className="container__ticker-detail">
        <Route path="/:ticker">
          <Detail />
        </Route>
        <Route exact path="/">
          <Empty />
        </Route>
      </div>
    </div>
  )

}

export default Layout