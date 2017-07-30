import React, { Component } from 'react';

class ItemType extends React.Component {




  render() {
    return (
      <form className="itemTypeContainer">
        <div className="itemTypeColumn">
          <div>
            <p className="itemType">Item type</p>
          </div>
          <div className="radio">
            <input type="radio" value="option1" name="allItems" />
            <label htmlFor="allItems"><span></span>&#160;&#160;All items</label>
          </div>
          <div className="radio">
            <input type="radio" value="option2" name="handmade"/>
            <label htmlFor="handmade"><span></span>&#160;&#160;Handmade</label>
          </div>
          <div className="radio">
            <input type="radio" value="option3" name="vintage"/>
            <label htmlFor="vintage"><span></span>&#160;&#160;Vintage</label>
          </div>
        </div>
      </form>
    )
  }



}
export default ItemType;
