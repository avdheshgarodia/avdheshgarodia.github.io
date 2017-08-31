import React, { Component } from 'react';
import images from "./images.json";
import { Link } from 'react-router-dom'
import './Home.css';

class Category extends Component {
  render() {
  let category = this.props.match.params.category
  let categories = images.images.categories;
	  
  let imageLayout = categories[category].images.map((image) => {
	  console.log(image);
	  let style = {
        'backgroundImage': 'url(../' + image + ')',
        'backgroundSize': 'cover'
      };
	  
	  return (
		<div key={image} className="image-element-class" style={style}/>
	  )
  })
  
  return(
	  <div className="Category">
	   <div className="collections">
	  	{imageLayout}
	  </div>
	  </div>
  )
  }
}

export default Category