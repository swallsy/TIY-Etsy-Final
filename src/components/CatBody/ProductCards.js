import React, { Component } from 'react';
import '../../styles/ProductCards.css';

export default class ProductCards extends Component {
  constructor(props) {
    super(props);
    this.state= {
    product: []
  }
}

  componentDidMount() {
    let activeListings = this.props.listingFilter.filter((activeListing) => {
      return activeListing.state = "active";
    });
    let validListings = activeListings.filter((validListings) => {
      return validListings.User;
    });
      let productCards = validListings.map((oneProduct) => {
        console.log(oneProduct);
        console.log(oneProduct.User.feedback_info.score);
        return (
          <div className="card col-md-3 product-card" key={oneProduct.listing_id}>
            <a href={oneProduct.url} className="link" >
              <img className="product-image" src={oneProduct.MainImage.url_170x135} />
              <div className="product-title">{oneProduct.title.substring(0, 36)}</div>
              <div className="shop-name">{oneProduct.Shop.shop_name}</div>
              <div className="score">
                {oneProduct.User.feedback_info.score > 79 ? (
                  <span className="reviews">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                  </span>
                ) : oneProduct.User.feedback_info.score  > 59 ? (
                  <span className="reviews">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                  </span>
                ) : oneProduct.User.feedback_info.score  > 39 ? (
                  <span className="reviews">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                  </span>
                ) : oneProduct.User.feedback_info.score  > 19 ? (
                  <span className="reviews">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                  </span>
                ) : oneProduct.User.feedback_info.score < 19 ? (
                  <span className="reviews">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                  </span>
                ) : (
                  <span></span>
                )}
                <span className="total-reviews">  ({oneProduct.num_favorers})</span>
              </div>
              <div className="price">${oneProduct.price}</div>
            </a>
          </div>
        )
    })
    this.setState({product: productCards})
  }
  render() {
    return (
      <div className="product-row">
        {this.state.product}
      </div>
    )
  }
}
