import React, { Component } from "react";
import "../styles/App.css";

import ShopHeader from './ShopHeader'
import LikeBanner from './LikeBanner'
import ProductImage from './ProductImage'
import PurchaseInfo from './PurchaseInfo'
import ProdDesc from './ProdDesc'
import ShopSidebar from './ShopSidebar'

class App extends Component {
  constructor(){
    super();
    this.state = {
      results: {}
    }
  }
  componentDidMount() {
    fetch('https://openapi.etsy.com/v2/listings/175112598?includes=Shop/Listings/MainImage&api_key=nrfza0h31bu4g5biq6bq6g4c').then(response => response.json()).then(response => {
      this.state = {
        results: response.results
      }
      console.log(this.state);
    })
  }
  render() {
    return (
      <div className="App">
        <div className="row justify-content-center">
          <div className="row col-10 justify-content-center">
            <ShopHeader />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="row col-sm-6">
            <LikeBanner />
            <ProductImage />
            <ProdDesc />
          </div>
          <div className="row col-sm-4">
            <PurchaseInfo />
            <ShopSidebar />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
