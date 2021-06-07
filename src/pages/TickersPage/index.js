import { Layout } from "@components"
import TickerDetail from "./TickerDetail"
import TickersMaster from "./TickersMaster"

export default function TickersPage() {
  return (
    <Layout
      id="TickersPage"
      master={TickersMaster}
      detail={TickerDetail}
    />
  )
}