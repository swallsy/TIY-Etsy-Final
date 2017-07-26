import React, { Component } from 'react';

export default class ProductCards extends Component {
  constructor() {
    super();
    this.state = {
      products : []
    };
  }

  componentDidMount() {
    fetch('https://openapi.etsy.com/v2/listings/active?api_key=3yhxu7gn2ot24so9hzuqbxc9&fields=title,url&limit=10&includes=Images,Shop').then(resp => resp.json())
    .then(resp => {
      let productCards = resp.results.map((product) => {
        return (
          <div className="card" key={product.Images.listing_image_id}>
            <img src={product.Images[0].url_75x75} />
            <div>{product.title}</div>
            <div>{product.Shop.shop_name}</div>
            <div>{product.Images.rank}</div>
          </div>
        )
      })
      this.setState({products: productCards});
      console.log(this.state.products);
    })
  }


  render() {
    return (
      <div className="card">
        {this.state.products}
      </div>
    )
  }
}
