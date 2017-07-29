import React, { Component } from 'react';
import '../../styles/ProductCards.css';

export default class ProductCards extends Component {
  constructor(props) {
    super(props);
    this.state= {
    feedback_score: '',
    feedbackstar: '',
    product: []
  }
}

  componentDidMount() {
      let productCards = this.props.listingFilter.map((oneProduct) => {
        if (oneProduct.state == "active") {
        this.setState({feedback_score: oneProduct.User.feedback_info.score});
         if (this.state.feedback_score > 89) {
            this.setState({
                feedbackstar:
                  <div>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                  </div>
            })
            console.log(this.state.feedbackstar);
          } else if (this.state.feedback_score  > 69) {
            this.setState({
                feedbackstar:
                  <div>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                  </div>
            })
          } else if (this.state.feedback_score  > 49) {
            this.setState({
                feedbackstar:
                  <div>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                  </div>
            })
          } else if (this.state.feedback_score  > 29) {
            this.setState({
                feedbackstar:
                    <div>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star-o" aria-hidden="true"></i>
                      <i className="fa fa-star-o" aria-hidden="true"></i>
                      <i className="fa fa-star-o" aria-hidden="true"></i>
                    </div>
            })
          } else if (this.state.feedback_score  > 9) {
            this.setState({
              feedbackstar:
                <div>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star-o" aria-hidden="true"></i>
                  <i className="fa fa-star-o" aria-hidden="true"></i>
                  <i className="fa fa-star-o" aria-hidden="true"></i>
                  <i className="fa fa-star-o" aria-hidden="true"></i>
                </div>
            })
          } else {
            this.setState({
              feedbackstar:
                <div>
                  <i className="fa fa-star-o" aria-hidden="true"></i>
                  <i className="fa fa-star-o" aria-hidden="true"></i>
                  <i className="fa fa-star-o" aria-hidden="true"></i>
                  <i className="fa fa-star-o" aria-hidden="true"></i>
                  <i className="fa fa-star-o" aria-hidden="true"></i>
                </div>
                })
            }
        console.log(this.state.feedbackstar);
        return (
          <div className="card col-md-2 product-card" key={oneProduct.listing_id}>
            <a href={oneProduct.url}>
              <img className="product-image" src={oneProduct.MainImage.url_170x135} />
              <div className="product-title">{oneProduct.title.substring(0, 36)}...</div>
              <div className="shop-name">{oneProduct.Shop.shop_name}</div>
              <div className="reviews">{this.state.feedbackstar}({oneProduct.num_favorers})</div>
              <div className="price">${oneProduct.price}</div>
            </a>
          </div>
        )
      }
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
