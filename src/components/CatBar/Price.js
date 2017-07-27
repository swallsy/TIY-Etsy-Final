import React, {Component} from 'react';

class Price extends React.Component {
  constructor(props) {
    super(props);
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
          <label>
            {/* <input type="radio" value="anyPrice" checked={this.props.selectedOption === 'anyPrice'} onChange={this.handleOptionChange}/> */}
            Any price
          </label>
        </div>
        <div className="radioPrice">
          <label>
            <input type="radio" value="underTwentyFive" checked={this.props.selectedOption === 'underTwentyFive'} onChange={this.handleOptionChange}/>
            Under $25
          </label>
        </div>
        <div className="radioPrice">
          <label>
            {/* <input type="radio" value="twentyFiveToFifty" checked={this.state.selectedOption === 'twentyFivetoFifty'} onChange={this.handleOptionChange}/> */}
            $25 to $50
          </label>
        </div>
        <div className="radioPrice">
          <label>
            {/* <input type="radio" value="fiftyToOneHundred" checked={this.state.selectedOption === 'fiftyToOneHundred'} onChange={this.handleOptionChange}/> */}
            $50 to $100
          </label>
        </div>
        <div className="radioPrice">
          <label>
            {/* <input type="radio" value="overOneHundred" checked={this.state.selectedOption === 'overOneHundred'} onChange={this.handleOptionChange}/> */}
            Over $100
          </label>
        </div>
        <div className="radioPrice">
          <label>
            {/* <input type="radio" value="custom" checked={this.state.selectedOption === 'custom'} onChange={this.handleOptionChange}/> */}
            Custom
          </label>
        </div>
        <input className="customPriceForm" type="text" value="lowPrice"/>
        <label>
          to
        </label>
        <input className="customPriceForm" type="text" value="highPrice"/>
        <input className="priceSubButton" type="submit" value="&rarr;"/>
      </form>
    )
  }
}
export default Price;
