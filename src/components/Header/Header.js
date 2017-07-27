import React, { Component } from 'react';
import Search from './Search.js';
import NavBar from './Nav/NavBar.js'

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <Search />
        <NavBar />
      </div>
    )
  }
}

export default Header;
