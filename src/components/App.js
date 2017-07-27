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
				<div className='row  justify-content-center'>
					<div className='col-10'>
						<ShopHeader />
					</div>
				</div>
				<div className = 'row justify-content-center'>
					<div className='col-6'>
		      	<LikeBanner />
						<ProductImage />
						<ProdDesc />
					</div>
					<div className='col-4'>
						<PurchaseInfo />
						<ShopSidebar />
					</div>
				</div>
			</div>
    );
  }
}

export default App;
