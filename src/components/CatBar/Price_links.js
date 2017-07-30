import React, {Component} from 'react';

class Price_links extends React.Component {
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
      <form>
        <div className="priceTitle">
          <label>
            Price ($)
          </label>
        </div>
        <div className="radioPrice">
          <input type="radio" value="anyPrice" checked={true} />
            <a href="https://www.etsy.com/search?explicit=1&min=&max=&price_bucket=1&use_mmx=1">
              <label>
                Any price
              </label>
            </a>
        </div>
        <div className="radioPrice">
          <input type="radio" value="underTwentyFive" />
            <a href="https://www.etsy.com/search?explicit=1&min=&max=25&price_bucket=1&use_mmx=1">
              <label>
                Under $25
              </label>
            </a>
        </div>
        <div className="radioPrice">
          <input type="radio" value="twentyFiveToFifty" />
            <a href="https://www.etsy.com/search?explicit=1&min=25&max=50&price_bucket=1&use_mmx=1">
              <label>
                $25 to $50
              </label>
            </a>
        </div>
        <div className="radioPrice">
          <input type="radio" value="fiftyToOneHundred" />
            <a href="https://www.etsy.com/search?explicit=1&min=50&max=100&price_bucket=1&use_mmx=1">
              <label>
                $50 to $100
              </label>
            </a>
        </div>
        <div className="radioPrice">
          <input type="radio" value="overOneHundred" />
            <a href="https://www.etsy.com/search?explicit=1&min=100&max=&price_bucket=1&use_mmx=1">
              <label>
                Over $100
              </label>
            </a>
        </div>
        <div className="radioPrice">
          <input type="radio" value="custom" />
            <label>
              Custom
            </label>
        </div>
          <input className="customPriceForm" onChange={this.handleLowPriceChange} type="text" value={this.state.lowPrice}/>
            <label>
              to
            </label>
          <input className="customPriceForm" onChange={this.handleHighPriceChange} type="text" value={this.state.highPrice}/>
        <input className="priceSubButton" type="submit" value="&rarr;" onClick={this.addToList} />
      </form>

)


  }
}
export default Price_links;
