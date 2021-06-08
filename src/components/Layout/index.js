import { Empty } from "@components";
import { Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { useState } from "react";
import { ErrorFallback } from "@components"

const Layout = (props) => {
  const [hasError, setHasError] = useState(true);

  const { master: Master, detail: Detail, id } = props;

  return (
    <div className="container" id={id}>
      <div className="container__tickers-list">
        <Master />
      </div>
      <div className="container__ticker-detail">
        <Route path="/:ticker">
          <ErrorBoundary
            FallbackComponent={ErrorFallback}
            onReset={() => {
              setHasError(!hasError)
            }}
          >
            <Detail hasError={hasError} />
          </ErrorBoundary>
        </Route>
        <Route exact path="/">
          <Empty />
        </Route>
      </div>
    </div>
  );
};

export default Layout;
