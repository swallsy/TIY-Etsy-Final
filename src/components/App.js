import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';

import ShopHeader from './ShopHeader'
import LikeBanner from './LikeBanner'
import ProductImage from './ProductImage'
import PurchaseInfo from './PurchaseInfo'
import ProdDesc from './ProdDesc'
import ShopSidebar from './ShopSidebar'

class App extends Component {
  render() {
    return (
      <div className="App">
				<ShopHeader />
      	<LikeBanner />
				<ProductImage />
				<ProdDesc />
				<PurchaseInfo />
				<ShopSidebar />

      </div>
    );
  }
}

export default App;
