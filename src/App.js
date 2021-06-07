import logo from './logo.svg';
import './App.css';
import { useEffect } from "react"
import { useAppState } from "@hooks"
import { getTickers } from "@state/tickers/actions"
import { Header } from "@components"
import TickersPage from "@pages/TickersPage"
import { Redirect } from "react-router-dom"

function App() {

  const [
    {
      tickers: {
        isLoading
      }
    },
    actions
  ] = useAppState(state => state, { getTickers })

  useEffect(() => {

    const fetchInitialTickers = () => {
      actions.getTickers()
    }

    fetchInitialTickers()

  }, [])

  return (
    <div className="App">
      <Redirect to="/" />
      <Header />
      <TickersPage />
    </div>
  );
}

export default App;
