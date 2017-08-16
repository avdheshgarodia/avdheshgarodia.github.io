import React, { Component } from 'react';
import Masonry from 'react-masonry-component';

import logo from './logo.svg';
import './App.css';
import images from "./images.json";

class App extends Component {
  render() {
    let categories = images.images.categories;
    let headerElements = Object.keys(categories).map((category, index) => {
      return (
        <li key={index} className="image-element-class">
          <img src={categories[category].header}/>
          <div className="contents">
            <a href="">View {category}</a>
          </div>
        </li>
      )
    })

    let masonryOptions = {
        transitionDuration: 0
    };
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Avdhesh Garodia</h2>
        </div>
        <div className="App-intro">
          <Masonry
              elementType={'ul'}
              options={masonryOptions}>
              {headerElements}
          </Masonry>
        </div>
      </div>
    );
  }
}

export default App;
