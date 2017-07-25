import React, { Component } from 'react';
import Cards from './Cards.js';

export default class ShopCards extends Component {
    constructor(props){
        super(props)
    }


    render() {
        return (
            <div>
                <Cards type={this.props.type}/>
            </div>
        )
    }
}
