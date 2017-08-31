import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import images from "./images.json";


class Header extends Component {
render(){
	 let categories = images.images.categories;

	 let links = Object.keys(categories).map((category, index) => {

      let categoryLink = "/categories/" + category;

      return (
		  <li key={category}><Link key={category} to={categoryLink}>{category}</Link></li>
      )
    })
	
	
	return (  
		<header>
		<nav>
		  <ul>
			<li><Link to='/'>Home</Link></li>
		 	{links}
		  </ul>
		</nav>
	  </header>
	)
}
}

export default Header
