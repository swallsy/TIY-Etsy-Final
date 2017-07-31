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
            <input type="radio" value="anyPrice" checked={this.props.selectedOption === 'anyPrice'} onChange={this.props.handleOptionChange}/>
            <label><span></span>&#160;&#160;Any price</label>
          </div>
          <div className="radioPrice">
              <input type="radio"  value="underTwentyFive" checked={this.props.selectedOption === 'underTwentyFive'} onChange={this.props.handleOptionChange}/>
              <label><span></span>&#160;&#160;Under $25</label>
          </div>
          <div className="radioPrices">
              <input type="radio"  value="twentyFivetoFifty" checked={this.props.selectedOption === 'twentyFivetoFifty'} onChange={this.props.handleOptionChange}/>
              <label ><span></span>&#160;&#160;$25 to $50</label>
          </div>
          <div className="radioPrice">
              <input type="radio" value="fiftyToOneHundred" checked={this.props.selectedOption === 'fiftyToOneHundred'} onChange={this.props.handleOptionChange}/>
              <label><span></span>&#160;&#160;$50 to $100</label>
          </div>
          <div className="radioPrice">
              <input type="radio" value="overOneHundred" checked={this.props.selectedOption === 'overOneHundred'} onChange={this.props.handleOptionChange}/>
              <label ><span></span>&#160;&#160;Over $100</label>
          </div>
          <div className="radioPrice">
              <input type="radio"  value="custom" />
              <label><span></span>&#160;&#160;Custom</label>
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
