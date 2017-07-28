import React, { Component } from 'react';
import '../../styles/ProductCards.css';

export default class ProductCards extends Component {
  constructor(props) {
    super(props);
    this.state= {
    feedback_score: '',
    feedbackstar: '',
    starfilled: <i className="fa fa-star" aria-hidden="true"></i>,
    starunfilled: <i className="fa fa-star-o" aria-hidden="true"></i>
  }
}


  render() {
      let productCards = this.props.listingFilter.map((product) => {
        this.setState({feedback_score: product.User.feedback_info.score});
        if (this.state.feedback_score > 89) {
            this.setState({
                feedbackstar: <div>
                        {this.state.starfilled}{this.state.starfilled}{this.state.starfilled}{this.state.starfilled}{this.state.starfilled}
                    </div>
            })
        } else if (this.state.feedback_score  > 69) {
            this.setState({
                feedbackstar: <div>
                        {this.state.starfilled}{this.state.starfilled}{this.state.starfilled}{this.state.starfilled}{this.state.starunfilled}
                    </div>
            })
        } else if (this.state.feedback_score  > 49) {
            this.setState({
                feedbackstar: <div>
                        {this.state.starfilled}{this.state.starfilled}{this.state.starfilled}{this.state.starunfilled}{this.state.starunfilled}
                    </div>
            })
        } else if (this.state.feedback_score  > 29) {
                this.setState({
                    feedbackstar: <div>
                            {this.state.starfilled}{this.state.starfilled}{this.state.starunfilled}{this.state.starunfilled}{this.state.starunfilled}
                        </div>
                })
            } else if (this.state.feedback_score  > 9) {
                this.setState({
                    feedbackstar: <div>
                            {this.state.starfilled}{this.state.starunfilled}{this.state.starunfilled}{this.state.starunfilled}{this.state.starunfilled}
                        </div>
                })
            } else {
                this.setState({
                    feedbackstar: <div>
                            {this.state.starunfilled}{this.state.starunfilled}{this.state.starunfilled}{this.state.starunfilled}{this.state.starunfilled}
                        </div>
                })
            }

        return (
          <div className="card col-md-2 product-card" key={product.listing_image_id}>
            <a href={product.url}>
              <img className="product-image" src={product.MainImage.url_170x135} />
              <div className="product-title">{product.title.substring(0, 36)}...</div>
              <div className="shop-name">{product.Shop.shop_name}</div>
              <div className="reviews">{this.state.feedbackstar}({product.num_favorers})</div>
              <div className="price">${product.price}</div>
            </a>
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
