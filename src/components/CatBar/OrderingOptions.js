import React, { Component } from 'react';

class OrderingOptions extends React.Component {




  render() {
    return (
      <form>
      <div>
      <label>
        Ordering options
      </label>
      </div>
    <div className="radio">
      <label>
        <input type="checkbox" value="option1" checked={true} />
        Accepts Etsy gift cards
      </label>
    </div>
    <div className="radio">
      <label>
        <input type="checkbox" value="option2" />
        Customizable
      </label>
    </div>
  </form>
    )
  }



}
export default OrderingOptions;
