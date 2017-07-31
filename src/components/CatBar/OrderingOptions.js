import React, { Component } from 'react';

class OrderingOptions extends React.Component {




  render() {
    return (
      <div className="orderingOptionsColumn">
        <form>
          <label>Ordering options</label>
          <label>
            <input type="checkbox" value="option1" />  Accepts Etsy gift cards</label>
          <label>
            <input type="checkbox" value="option2" />  Customizable</label>
        </form>
      </div>
    )
  }



}
export default OrderingOptions;
