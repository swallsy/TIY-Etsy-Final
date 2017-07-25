import React, { Component } from 'react';

class ShopLocation extends React.Component {




  render() {
    return (
      <form>
      <div>
      <label>
        Shop location
      </label>
      </div>
    <div className="shopLocation">
      <label>
        <input type="radio" value="option1" checked={true} />
        Anywhere
      </label>
    </div>
    <div className="shopLocation">
      <label>
        <input type="radio" value="option2" />
        United States
      </label>
    </div>
    <div className="shopLocation">
      <label>
        <input type="radio" value="option3" />
        Custom
      </label>
    </div>
    <input className="titleForm" type="text" value="Enter location"/>
    <input className="infoSubButton" type="submit" value="&rarr;" />
  </form>
    )
  }
}
export default ShopLocation;
