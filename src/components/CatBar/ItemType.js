import React, { Component } from 'react';

class ItemType extends React.Component {




  render() {
    return (
      <form>
      <div>
      <label>
        Item type
      </label>
      </div>
    <div className="radio">
      <label>
        <input type="radio" value="option1" checked={true} />
        All items
      </label>
    </div>
    <div className="radio">
      <label>
        <input type="radio" value="option2" />
        Handmade
      </label>
    </div>
    <div className="radio">
      <label>
        <input type="radio" value="option3" />
        Vintage
      </label>
    </div>
  </form>
    )
  }



}
export default ItemType;
