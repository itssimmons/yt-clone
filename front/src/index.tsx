import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'

import './index.css'

import VideoList from './components/Videos/VideoList'

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Switch>
				<Route path="/" component={VideoList} />
			</Switch>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
)

reportWebVitals()
