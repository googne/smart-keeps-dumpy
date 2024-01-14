import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './bootstrap.min.css'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import store from './store'
import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
