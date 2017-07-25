import React, { Component } from 'react';
import Search from './Search.js';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        {<Search />}


      </div>
    )
  }
}

export default Header;
