import React, { Component } from 'react';

export default class ProductCards extends Component {
  constructor(props) {
    super(props);
  }
  render() {
      let productCards = this.props.listingFilter.map((product) => {
        return (
          <div className="card col-md-2" key={product.listing_image_id}>
            <img src={product.MainImage.url_170x135} />
              <div>{product.title}</div>
              <div>{product.price}</div>
          </div>
        )
      })
    return (
      <div className="row">
        {productCards}
      </div>
    )
  }
}
