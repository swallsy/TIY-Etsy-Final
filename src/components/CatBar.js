import React, { Component } from 'react';

import AllCategories from './CatBar/AllCategories.js';

import Color from './CatBar/Color.js';
import ItemType from './CatBar/ItemType.js';
import OrderingOptions from './CatBar/OrderingOptions.js';
import Price from './CatBar/Price.js';
import ShipTo from './CatBar/ShipTo.js';
import ShopLocation from './CatBar/ShopLocation.js';
import ProductCards from './CatBody/ProductCards.js';


export default class CatBar extends Component {
  constructor() {
    super();
    this.state = {
      //will hold all the objects that apply to the filters
      listingFilter: [],
      //Thes are the filters that will be applied to the the api fetch
      //Values needed for Detailed Cat Card filters
      baseURL: 'https://openapi.etsy.com/v2/listings/trending?api_key=3yhxu7gn2ot24so9hzuqbxc9',
      selectedOptions:"",
      mainFetchUrl: '&limit=48&explicit=1&min=&max=&price_bucket=1&use_mmx=1&includes=MainImage,Shop,User',
      fetchUrl:{

          categories:
          {
            allCategoriesFetch:
            "&explicit=1&amp;use_mmx=1&amp;min=&amp;max=&amp;price_bucket=1&amp&includes=MainImage,Shop",

            craftSuppliesAndToolsFetch: '&explicit=1&min=&max=&price_bucket=1&use_mmx=1&categories=craft_supplies_and_tools&includes=MainImage,Shop',

            homeAndLivingFetch:
            '&explicit=1&min=&max=&price_bucket=1&use_mmx=1&categories=home_and_living&includes=MainImage,Shop',

            ArtAndCollectiblesFetch:
            '&explicit=1&min=&max=&price_bucket=1&use_mmx=1&categories=art_and_collectibles&includes=MainImage,Shop',

            clothingFetch:
            '&explicit=1&min=&max=&price_bucket=1&use_mmx=1&categories=clothing&includes=MainImage,Shop',

            accessoriesFetch:
            '&explicit=1&min=&max=&price_bucket=1&use_mmx=1&categories=accessories&includes=MainImage,Shop',

            paperAndPartySuppliesFetch:
            '&explicit=1&min=&max=&price_bucket=1&use_mmx=1&categories=paper_and_party_supplies&includes=MainImage,Shop',

            weddingsFetch:
            '&explicit=1&min=&max=&price_bucket=1&use_mmx=1&categories=weddings&includes=MainImage,Shop',

            bagsAndPursesFetch:
            '&explicit=1&min=&max=&price_bucket=1&use_mmx=1&categories=bags_and_purses&includes=MainImage,Shop,User'
          },
          price: {
            under25: "&explicit=1&amp;min=&amp;max=25&amp;price_bucket=1&includes=MainImage,Shop",
            between25_50: '&explicit=1&amp;min=25&amp;max=50&amp;price_bucket=1&includes=MainImage,Shop',
            between50_100: '&explicit=1&amp;min=50&amp;max=100&amp;price_bucket=1&includes=MainImage,Shop'
          }

        }
      }
  }
  componentDidMount() {
    fetch(this.state.baseURL + "" + this.state.mainFetchUrl)
    .then(resp => resp.json())
      .then(resp => {
        let listing = resp.results;
        this.setState({listingFilter: listing});
        console.log("listing filter below");
        console.log(this.state.listingFilter)
      })
  }

  getInitialState = function() {
    return{
      selectedOption: "option1"
    }
  }


  render() {
    return(
      <div className="row">
        <div className="card col-md-2">
          <AllCategories />
          <ShopLocation />
          <ItemType />
          <Price getInitialState={this.getInitialState} />
          <Color />
          <OrderingOptions />
          <ShipTo />
        </div>
        <div className="CatBodyCards-controller col-md-10">
          <ProductCards className="col-md-10" listingFilter={this.state.listingFilter} />
        </div>
        <div className="productCards-controller">
        </div>
      </div>
    )
  }

}
