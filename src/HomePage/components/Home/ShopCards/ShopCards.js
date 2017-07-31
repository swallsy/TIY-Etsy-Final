import React, { Component } from 'react';
import Cards from './Cards.js';
import '../../../styles/ShopCards.css';

export default class ShopCards extends Component {
    render() {
        return (
            <div className="shop-cards">
                <Cards type={this.props.type}/>
            </div>
        )
    }
}
