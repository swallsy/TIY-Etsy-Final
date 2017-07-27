import React, { Component } from 'react';
import AllCategories from './CatBar/AllCategories.js';
import Color from './CatBar/Color.js';
import ItemType from './CatBar/ItemType.js';
import OrderingOptions from './CatBar/OrderingOptions.js';
import Price from './CatBar/Price.js';
import ShipTo from './CatBar/ShipTo.js';
import ShopLocation from './CatBar/ShopLocation.js';
import ProductCards from './CatBody/ProductCards.js';
import DetailedCatCard from './CatBody/DetailedCatCards.js'
import CatCards from './CatBody/CatCards.js';


export default class CatBar extends Component {
  constructor() {
    super();
    this.state = {
      //will hold all the objects that apply to the filters
      listingFilter: [],
      //Thes are the filters that will be applied to the the api fetch
      //Values needed for Detailed Cat Card filters
      baseURL: 'https://api.etsy.com/v2/listings/trending?api_key=3yhxu7gn2ot24so9hzuqbxc9',
      selectedOptions:"",
      fetchUrl:{
          mainFetchUrl: '&explicit=1&min=&max=&price_bucket=1&use_mmx=1&includes=MainImage',
          allCategoriesFetch: '&explicit=1&min=&max=&price_bucket=1&use_mmx=1&includes=MainImage'
      }
    };
  }
  componentDidMount() {
    fetch(this.state.baseURL + "" + this.state.fetchUrl.mainFetchUrl)
    .then(resp => resp.json())
      .then(resp => {
        let listing = resp.results;
        this.setState({listingFilter: listing});
        console.log("listing filter below");
        console.log(this.state.listingFilter)
      })
  }


  render() {
    console.log(this.state.listingFilter)
    return(
      <div className="row">
        <div className="card col-md-2">
          <AllCategories />
          <Color />
          <ItemType />
          <OrderingOptions />
          <Price handlePriceSelection={this.handlePriceSelection} />
          <ShipTo />
          <ShopLocation />
        </div>
        <div className="CatBodyCards-controller col-md-10">
          <DetailedCatCard  />
          <ProductCards className="col-md-10" listingFilter={this.state.listingFilter} />
        </div>
        <div className="productCards-controller">
        </div>
      </div>
    )
  }

}
