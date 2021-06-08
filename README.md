# Introduction

The goal of this project was to build a React Application that consume some API endpoint provided by [any-api](https://any-api.com/)

For reach the goal I wanted to build a Client that has:

  * [Mocked Server](#mocked-server)
  
  * [HTTPClient](#http-client) for data data fetching. 

  * [Store](#store) to handle data.

  * [Styles](#style).

  * [E2E-Tests](#e2e).

  * [ErrorBoundary](#error-boundary).


The endpoint I've decided to use, from the list of APIs, is [polygon](https://polygon.io/) which provides financial market data.

The App has a list of availables tickers [TickersMaster](/src/pages/TickersPage/TickersMaster/index.js) and a [TickerDetail](/src/pages/TickersPage/TickerDetail/index.js) of the selected ticker (will show the open-close market for the last 3 working days.)

For the list of tickers, polygon just provided a new reference [v3](https://polygon.io/docs/get_v3_reference_tickers_anchor). It uses paginations with cursors, so after the first call you will get the response with a value [next_url](/src/api/tickers/index.js) used to fetch the next "chunks" of tickers. I love this way of paginations, but I've also built a [mocked](/src/mocks/handlers.js) version for the old v2 paginations, now deprecated.


## <a name="mocked-server"></a>Mocked Server
If you try to run the application on production mode will soon notice that after consuming 5 calls, the server start responding with 429 - limit reached. This happen becuse the service provided from polygon is subscription based. But thanks to [MSW](https://mswjs.io/) I mocked the [responses](/src/mocks). Once the client make the call it will intercept the request serving the mock as we consumed the real API. So I've been able to develop without friction, and once the App is ready to prod I just need to subscibe to the polygon service.

Mocking the responses helped me too with the testing part. In real world you don't want to have automation testing consuming your real API. 


## <a name="http-client"></a>HTTPClient
At the beginning of the project I've spent some time to decide whether or not use a library or build my own HTTPclient.

My final decision was to go with [axios](https://github.com/axios/axios) which heled me with some [params](/src/api/index.js) configurations.

On my others repo there are some examples of [custom](https://github.com/erik18xk/chat-client-challenge/blob/master/src/utils/HTTPClient.js) HTTPClient.


## <a name="store"></a>Store
Probably for an easy app like this one ther's no need to have redux, but with [redux-toolkit](https://redux-toolkit.js.org/) it is really easy to setup redux and start using some built-in features like slices and HOA. Just better to have it :)

## <a name="style"></a>Styles
For this project I didn't want to use any style library, nither frameworks. So I went with simple scss using [BEM](http://getbem.com/introduction/) methodology. For each component/page lives a stylesheet file with the styles to apply.


## <a name="e2e"></a>E2E-Tests
I've added some sample tests, just to make sure the App is working properly. The tests can be runned using:
```npm run test``` or making a change to the source code and trying to commit. If I extend my tests coverage this will helps a lot with the scalability of the project. E.g. if you try to change the title of the page and then commit It want let you do it until some changes to to the [tests](/src/pages/TickersPage/__test__/e2e.test.js) are made.

## <a name="error-boundary"></a>Error Boundary
Since React16 an ErrorBoundary can catch JavaScript errors anywhere in their child component tree, and display a fallback UI.
I've added 2 ErrorBoundary, the first one inside the App component which catch all the errors that can happen inside the APP, the [second](/src/components/Layout/index.js) one will be triggered when you select the ticker AA from the list, but you can easily recover from the last one pressing the button.

## Final Thoughts 
I had fun building this little App during my free time. Hope to have more time to extend some functionality. The first one will be display a stock chart insted the open-close summary, getting my hand dirty with [d3](https://d3js.org/) :).


## Scripts for the project
In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test:e2e`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.