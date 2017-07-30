import React, {Component} from 'react';

class Price extends React.Component {
  constructor(props) {
    super(props);

    this.handleLowPriceChange = this.handleLowPriceChange.bind(this);
    this.handleHighPriceChange = this.handleHighPriceChange.bind(this);

    this.state = {lowPrice: ''};
    this.state = {highPrice: ''};
  }

  handleLowPriceChange(event){
    this.setState({lowPrice: event.target.value});
  }
  handleHighPriceChange(event){
    this.setState({highPrice: event.target.value});
  }

  addToList = (event) => {
      event.preventDefault();
      this.setState({lowPrice: event.target.value, highPrice: event.target.value});
      console.log("Low price is      " + this.state.lowPrice);
      console.log("High price is     " + this.state.highPrice);
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
            <label htmlFor="anyprice"><span></span><a href="https://www.etsy.com/search?explicit=1&min=&max=&price_bucket=1&use_mmx=1">&#160;&#160;Any price</a></label>
          </div>
          <div className="radioPrice">
            <input type="radio" name="underTwentyFive"/>
            <label htmlFor="underTwentyFive"><span></span><a href="https://www.etsy.com/search?explicit=1&min=&max=25&price_bucket=1&use_mmx=1">&#160;&#160;Under $25</a></label>
          </div>
          <div className="radioPrice">
            <input type="radio" name="twentyFiveToFifty"/>
            <label htmlFor="twentyFiveToFifty"><span></span><a href="https://www.etsy.com/search?explicit=1&min=25&max=50&price_bucket=1&use_mmx=1">&#160;&#160;$25 to $50</a></label>
          </div>
          <div className="radioPrice">
            <input type="radio" name="fiftyToOneHundred"/>
            <label htmlFor="fiftyToOneHundred"><span></span><a href="https://www.etsy.com/search?explicit=1&min=50&max=100&price_bucket=1&use_mmx=1">&#160;&#160;$50 to $100</a></label>
          </div>
          <div className="radioPrice">
            <input type="radio" name="overOneHundred"/>
            <label htmlFor="overOneHundred"><span></span><a href="https://www.etsy.com/search?explicit=1&min=100&max=&price_bucket=1&use_mmx=1">&#160;&#160;Over $100</a></label>
          </div>
          <div className="radioPrice">
            <input type="radio" />
            <label htmlFor="custom"><span></span>&#160;&#160;Custom</label>
          </div>
          <div className="priceInputContainer">
            <input className="customPriceForm" onChange={this.handleLowPriceChange} type="text" value={this.state.lowPrice} placeholder="  Low"/>
            <span className="to">&#160;to&#160;&#160;</span>
            <input className="customPriceForm" onChange={this.handleHighPriceChange} type="text" placeholder="  High"/>
            <button className="priceSubButton" type="submit" onClick={this.addToList}><i className="fa fa-play" aria-hidden="true"></i></button>
          </div>
        </div>
      </form>
    )
  }
}
export default Price;
