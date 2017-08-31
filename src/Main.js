import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Home from './Home'
import Category from './Category';
import About from './About';


class Main extends Component {
  render() {
    return (
      <Route path='/'>
        <div>
          <Route exact path='/' component={Home}/>
          <Route path='/categories/:category' component={Category}/>
          <Route path='/about' component={About}/>
        </div>
      </Route>
    )
  }
}

export default Main;
