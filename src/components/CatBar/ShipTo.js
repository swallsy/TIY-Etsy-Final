import React, { Component } from 'react';

class ShipTo extends React.Component {

  render() {
    return (
      <div className="shipToColumn">
        <span className="ship-header">Ship to</span>
        <div className="select-join">
          <select className="txtCountry">
            <option>Choose country...</option>
            <option value="1">Syria</option>
            <option value="2">Afghanistan</option>
          </select>
        </div>
      </div>
    );
  }
}

export default ShipTo;
