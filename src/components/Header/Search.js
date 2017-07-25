import React, { Component } from 'react';
import "../../styles/Search.css";

class Search extends Component {
  render() {
    return (
      <div className="SearchBar">
        <img
          className="etsyLogo"
          src={require("./images/etsy-logo.svg")}
        />

      </div>
    )
  }
}

export default Search;
