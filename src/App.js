import "./App.css";
import { useEffect } from "react";
import { useAppState, useWindowSize } from "@hooks";
import { getTickers } from "@state/tickers/actions";
import { Header, ErrorBoundary } from "@components";
import TickersPage from "@pages/TickersPage";
import { useHistory } from "react-router-dom";

function App() {
  const [, actions] = useAppState((state) => state, { getTickers });

  const history = useHistory();
  const size = useWindowSize()

  useEffect(() => {
    history.replace("/");
    const fetchInitialTickers = () => {
      actions.getTickers();
    };

    fetchInitialTickers();

    // eslint-disable-next-line
  }, []);

  if (size.width < 1000) {
    return <h1> Plese try on wider screen :( </h1>
  }

  return (
    <div className="App">
      <Header />
      <ErrorBoundary>
        <TickersPage />
      </ErrorBoundary>
    </div>
  );
}

export default App;
