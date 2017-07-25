import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';

import ShopHeader from './ShopHeader.js'
import LikeBanner from './LikeBanner.js'
import ProductImage from './ProductImage.js'
import PurchaseInfo from './PurchaseInfo.js'
import ProdDesc from './ProdDesc.js'
import ShopSidebar from './ShopSidebar.js'

class App extends Component {
  render() {
    return (
      <div className="App">
					<div className='row  justify-content-md-center'>
					<ShopHeader />
				</div>
				<div className='row justify-content-md-center'>
	      	<LikeBanner />
					<ProductImage />
					<ProdDesc />
				</div>
				<div className='row justify-content-md-center'>
					<PurchaseInfo />
					<ShopSidebar />
				</div>
			</div>
    );
  }
}

export default App;
