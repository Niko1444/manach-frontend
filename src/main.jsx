import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<React.StrictMode>
			<Router>
				<App />
			</Router>
		</React.StrictMode>
	</Provider>,
)
