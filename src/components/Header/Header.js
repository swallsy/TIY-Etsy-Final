import React, { Component } from 'react';
import Search from './Search.js';
import NavBar from './Nav/NavBar.js'
import '../../styles/NavBar.css';

export default class Header extends Component {
  render() {
    return (
      <div id="header">
        <Search />
        <NavBar />
      </div>
    )
  }
}
