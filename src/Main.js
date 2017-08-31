import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Category from "./Category";


class Main extends Component {
	render() {
	return (
			<main>
				<Switch>	
					<Route exact path='/' component={Home}/>
					<Route path='/categories/:category' component={Category}/>
				</Switch>
			</main>
		)
  }
}

export default Main
