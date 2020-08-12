import React from 'react'
import ReactDOM from 'react-dom'
import GlobalStyles from './GlobalStyles'
import * as serviceWorker from './serviceWorker'
import store from './store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import App from './App'
import LoadingPage from './components/LoadingPage'

const persistor = persistStore(store)

ReactDOM.render(
  <>
    <Router>
      <GlobalStyles />
      <Provider store={store}>
        <PersistGate loading={<LoadingPage />} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </Router>
  </>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
