import React, { Component } from 'react';

export default class ProductCards extends Component {
  constructor() {
    super();
    this.state = {
      products : []
    };
  }

  componentDidMount() {
    fetch('https://api.etsy.com/v2/listings/trending?api_key=3yhxu7gn2ot24so9hzuqbxc9&limit=10&offset=0&page=1&categories=jewelry,craft_supplies_and_tools,home_and_living,art_and_collectibles,clothing,accessories,paper_and_party_supplies,weddings,bags_and_purses&includes=MainImage,Shop').then(resp => resp.json())
    .then(resp => {
      let productCards = resp.results.map((product) => {
        return (
          <div className="card col-md-3" key={product.MainImage.listing_image_id}>
            <img src={product.MainImage.url_170x135} />
            <div>{product.title}</div>
            <div>{product.Shop.shop_name}</div>
            <div>({product.Shop.num_favorers})</div>
            <div>${product.price}</div>
          </div>
        )
      })
      this.setState({products: productCards});
      console.log(this.state.products);
    })
  }


  render() {
    return (
      <div className="row">
        {this.state.products}
      </div>
    )
  }
}
