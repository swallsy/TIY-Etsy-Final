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
				<div className='row  justify-content-md-center'>
					<div className='row justify-content-md-center' className='col-10'>
						<ShopHeader />
					</div>
				</div>
				<div className = 'row justify-content-md-center'>
					<div className='row justify-content-md-center' className='col-6'>
		      	<LikeBanner />
						<ProductImage />
						<ProdDesc />
					</div>
					<div className='row' className='col-4'>
						<PurchaseInfo />
						<ShopSidebar />
					</div>
				</div>
			</div>
    );
  }
}

export default App;
