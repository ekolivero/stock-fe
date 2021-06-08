const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <div className="container__error">
    <div className="container__error--text">
      Ooops.. Something went wrong, but I think we can recover :)
    </div>
    <div className="container__error__button">
      <button className="container__error__button--btn" onClick={resetErrorBoundary}> Try recover </button>
    </div>
  </div>
)

export default ErrorFallback;