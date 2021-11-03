import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import reportWebVitals from './reportWebVitals'

import VideoList from './components/Videos/VideoList'
import VideoForm from './components/Videos/VideoForm'
import Navbar from './components/Navbar/Navbar'
import TrendPanel from './components/TrendPanel/TrendPanel'

import './index.scss'

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Navbar />

			<TrendPanel />
			<div className="main">
				<Switch>
					<Route exact path="/" component={VideoList} />
					<Route path="/new-video" component={VideoForm} />
				</Switch>
				<ToastContainer />
			</div>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
)

reportWebVitals()
