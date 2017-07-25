import React, { Component } from "react";
import "../../styles/Search.css";

class Search extends Component {
  render() {
    return (
      <div className=" navbar SearchBar">

        <div className="logo">
          <a className="navbar-brand" href="https://www.etsy.com/?ref=lgo"><img className="etsyLogo" src={require("./images/etsy-logo.svg")} /></a>
        </div>

        <div className="bar">
          <form className="form-inline">
            <label>
              <input className="form-control" type="text" placeholder="Search for items or shops" />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>

      </div>
    );
  }
}

export default Search;
