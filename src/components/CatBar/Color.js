import React, { Component } from 'react';

export default class Color extends Component {
  constructor() {
    super();
  }

  render() {
      let red = {
        background: '#F40B32'
      }
      let yellow = {
        background: '#F3CC0C'
      }
      let green = {
        background: '#0AC20A'
      }
      let blue = {
        background: '#0CCCF3'
      }
      let purple = {
        background: '#a60cf3'
      }
      let black = {
        background: '#000000'
      }

    return(
      <div className="color-container">
        <input type="checkbox" style={{background: '#F40B32'}}/>
        <input type="checkbox" style={yellow}/>
        <input type="checkbox" style={green}/>
        <input type="checkbox" style={blue}/>
        <input type="checkbox" style={purple}/>
        <input type="checkbox" style={black}/>
      </div>

    )
  }

}
