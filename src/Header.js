import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import images from './images.json';

import './Header.css';
import './css-libs/fonts/css/fontello.css';

class Header extends Component {
  render(){
    let categories = images.images.categories;

    return (
      <div className="App-header">
        <h2><Link to="/">Avdhesh Garodia</Link></h2>
        <div className="links">
          <Link title="About" to="/about" className="links-icon">
            <i className="icon-help"></i>
          </Link>
          <Link title="Email" to="mailto:" className="links-icon">
            <i className="icon-mail"></i>
          </Link>
          <Link title="Github" to="https://github.com/avdheshgarodia" className="links-icon">
            <i className="icon-github-circled"></i>
          </Link>
          <Link title="LinkedIn" to="" className="links-icon">
            <i className="icon-linkedin-squared"></i>
          </Link>
          <Link title="Facebook" to="" className="links-icon">
            <i className="icon-facebook-official"></i>
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
