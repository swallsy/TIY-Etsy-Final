import React, { Component } from 'react';

class Price extends React.Component {




  render() {
    return (
      <form>
      <div>
      <label>
        Price ($)
      </label>
      </div>
    <div className="price">
      <label>
        <input type="radio" value="option1" checked={true} />
        Under $25
      </label>
    </div>
    <div className="price">
      <label>
        <input type="radio" value="option2" />
        $25 to $50
      </label>
    </div>
    <div className="price">
      <label>
        <input type="radio" value="option3" />
        $50 to $100
      </label>
    </div>
    <div className="price">
      <label>
        <input type="radio" value="option3" />
        Over $100
      </label>
    </div>
    <div className="price">
      <label>
        <input type="radio" value="option3" />
        Custom
      </label>
    </div>
    <input className="titleForm" type="text" value="Low"/>
    <label> to </label>
    <input className="titleForm" type="text" value="High"/>
    <input className="infoSubButton" type="submit" value="&rarr;" />
  </form>
    )
  }
}
export default Price;
