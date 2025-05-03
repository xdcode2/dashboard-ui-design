import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import store from './app/store.js'
import { StrictMode } from 'react'
import axios from 'axios'


axios.defaults.withCredentials = true;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}> 
    <App />
    </Provider>
  </StrictMode>,
)
