import React, { Component } from 'react'
import { Router, Route, withRouter } from 'react-router-dom'

import './App.scss'

class App extends Component {
	render() {
		return (
			<div className='main-container'>
				<Router>
					<Route exact path='/'>
						{/**A CERTAIN REACT COMPONENT HERE
						 * eg: <Home />
						 */}
					</Route>
				</Router>
			</div>
		)
	}
}

export default withRouter(App)