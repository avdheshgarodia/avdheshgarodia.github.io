import React, { Component } from 'react';

import './Home.css';
import { Link } from 'react-router-dom'
import images from "./images.json";

class Home extends Component {
  render() {
    let categories = images.images.categories;
    console.log(categories);
    let headerElements = Object.keys(categories).map((category, index) => {
      let style = {
        'backgroundImage': 'url(' + categories[category].header + ')',
        'backgroundSize': 'cover'
      };
      let categoryLink = "/categories/" + category;

      return (
        <div key={index} className="image-element-class" style={style}>
          <div className="contents">
            <Link to={categoryLink}>View {category}</Link>
          </div>
        </div>
      )
    })

    let masonryOptions = {
        transitionDuration: 1,
        columnWidth: 200,
    };
    return (
      <div className="Home">
          <div className="collections">
              {headerElements}
        </div>
      </div>
    );
  }
}

export default Home;
