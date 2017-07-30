import React, { Component } from 'react';

class ShopLocation extends React.Component {




  render() {
    return (
      <form className="shopLocationColumn">
        <div>
          <label id="shopLocation">
            Shop location
          </label>
        </div>
        <div className="shopLocation">
          <input className="radioButton" type="radio" value="option1" name="anywhere"/>
          <label htmlFor="anywhere" className="locationLabels"><span></span>&#160;&#160;Anywhere</label>
        </div>
        <div className="shopLocation">
          <input className="radioButton" type="radio" value="option2" name="united-states"/>
          <label htmlFor="united-states" className="locationLabels"><span></span>&#160;&#160;United States</label>
        </div>
        <div className="shopLocation">
          <input className="radioButton" type="radio" value="option3" name="custom"/>
          <label forHTML="custom" className="locationLabels"><span></span>&#160;&#160;Custom</label>
        </div>
        <div className="inputContainer">
          <input className="titleForm" type="text" value="   Enter location"/>
          <button className="infoSubButton" type="submit"><i className="fa fa-play" aria-hidden="true"></i></button>
        </div>
      </form>
    )
  }
}
export default ShopLocation;
