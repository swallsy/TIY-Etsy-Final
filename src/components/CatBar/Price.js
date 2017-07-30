import React, {Component} from 'react';

class Price extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form className="itemTypeContainer">
        <div className="itemTypeColumn">
          <div className="priceTitle">
            <label>
              Price ($)
            </label>
          </div>
          <div className="radioPrice">
            <input type="radio" name="anyprice"/>
            <label htmlFor="anyprice"><span></span>&#160;&#160;Any price</label>
          </div>
          <div className="radioPrice">
            <input type="radio" name="underTwentyFive"/>
            <label htmlFor="underTwentyFive"><span></span>&#160;&#160;Under $25</label>
          </div>
          <div className="radioPrice">
            <input type="radio" name="twentyFiveToFifty"/>
            <label htmlFor="twentyFiveToFifty"><span></span>&#160;&#160;$25 to $50</label>
          </div>
          <div className="radioPrice">
            <input type="radio" name="fiftyToOneHundred"/>
            <label htmlFor="fiftyToOneHundred"><span></span>&#160;&#160;$50 to $100</label>
          </div>
          <div className="radioPrice">
            <input type="radio" name="overOneHundred"/>
            <label htmlFor="overOneHundred"><span></span>&#160;&#160;Over $100</label>
          </div>
          <div className="radioPrice">
            <input type="radio" />
            <label htmlFor="custom"><span></span>&#160;&#160;Custom</label>
          </div>
          <div className="priceInputContainer">
            <input className="customPriceForm" type="text" placeholder="  Low"/>
            <span className="to">&#160;to&#160;&#160;</span>
            <input className="customPriceForm" type="text" placeholder="  High"/>
            <button className="priceSubButton" type="submit"><i className="fa fa-play" aria-hidden="true"></i></button>
          </div>
        </div>
      </form>
    )
  }
}
export default Price;
