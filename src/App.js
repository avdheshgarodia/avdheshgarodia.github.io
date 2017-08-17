import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import images from "./images.json";

class App extends Component {
  render() {
    let categories = images.images.categories;
    let headerElements = Object.keys(categories).map((category, index) => {
      let style = {
        'backgroundImage': 'url(' + categories[category].header + ')',
        'backgroundSize': 'cover'
      };

      return (
        <div key={index} className="image-element-class" style={style}>
          <div className="contents">
            <a href="">View {category}</a>
          </div>
        </div>
      )
    })

    let masonryOptions = {
        transitionDuration: 1,
        columnWidth: 200,
    };
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Avdhesh Garodia</h2>
        </div>
        <div className="App-intro">
          <div className="collections">
              {headerElements}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
