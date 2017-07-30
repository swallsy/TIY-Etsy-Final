import React, { Component } from 'react';
import '../../styles/ProductCards.css';

export default class ProductCards extends Component {
  constructor(props) {
    super(props);
    this.state= {
    feedbackstar: '',
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
          <div className="card col-md-2 product-card" key={oneProduct.listing_id}>
            <a href={oneProduct.url}>
              <img className="product-image" src={oneProduct.MainImage.url_170x135} />
              <div className="product-title">{oneProduct.title.substring(0, 36)}...</div>
              <div className="shop-name">{oneProduct.Shop.shop_name}</div>
                {oneProduct.User.feedback_info.score > 89 ? (
                  <div className="reviews">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                  </div>
                ) : oneProduct.User.feedback_info.score  > 69 ? (
                  <div className="reviews">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                  </div>
                ) : oneProduct.User.feedback_info.score  > 49 ? (
                  <div className="reviews">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                  </div>
                ) : oneProduct.User.feedback_info.score  > 29 ? (
                  <div className="reviews">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                  </div>
                ) : oneProduct.User.feedback_info.score > 9 ? (
                  <div className="reviews">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                  </div>
                ) : oneProduct.User.feedback_info.score < 9 ? (
                  <div className="reviews">
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                  </div>
                ) : (
                  <span></span>
                )}
                <span>({oneProduct.num_favorers})</span>
              <div className="price">${oneProduct.price}</div>
            </a>
          </div>
        )
    })
    this.setState({product: productCards})
  }
  render() {
    return (
      <div className="row">
        {this.state.product}
      </div>
    )
  }
}
