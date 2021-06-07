import { Empty } from "@components"

const Layout = (props) => {
  const {
    master: Master,
    detail: Detail,
    id,
    ...rest
  } = props

  console.log(Detail)

  return (
    <div className="container" id={id}>
      <div className="container__tickers-list">
        <Master />
      </div>
      <div className="container__ticker-detail">
        <Detail />
      </div>
    </div>
  )

}

export default Layout