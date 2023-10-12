import { store } from './store/store'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
<Provider store={store}>
    <App />
  </Provider>,
)
