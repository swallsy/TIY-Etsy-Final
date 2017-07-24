import React, { Component } from 'react';
import '../styles/App.css';
import AllCategories from './CatBar/PlayList.js';
import Color from './CatBar/Color.js';
import ItemType from './CatBar/ItemType.js';
import OrderingOptions from './CatBar/OrderingOptions.js';
import Price from './CatBar/Price.js';
import ShipTo from './CatBar/ShipTo.js';
import ShopLocation from './CatBar/ShopLocation.js';
import CatCards from './CatCards/CatCards.js';
import DetailedCatCards from './CatCards/DetailedCatCards.js';
import ProductCards from './CatCards/ProductCards.js';
import CatBar from '../CatBar.js';
import PageCounter from '../PageCounter.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <AllCategories />
        <Color />
        <ItemType />
        <OrderingOptions />
        <Price />
        <ShipTo />
        <ShopLocation />
        <CatCards />
        <DetailedCatCards />
        <ProductCards />
        <CatBar />
        <PageCounter />
      </div>
    );
  }
}

export default App;
