import React, {Component} from 'react';
import '../styles/App.css';

class ShopHeader extends Component {
  constructor() {
    super();
    this.state = {
      shop: {}
    }
  }
  componentDidMount() {
    fetch('https://openapi.etsy.com/v2/shops/listing/175112598?api_key=nrfza0h31bu4g5biq6bq6g4c').then(response => response.json()).then(response => {
      console.log(response);
      let shopCards = response.results[0].Listings.map(shopCard => {
        return(
          <div>

          </div>
        )
      })
      this.setState({
        shop: {
          shop_id: response.results[0].shop_id,
          shop_name: response.results[0].shop_name,
          shop_url: response.results[0].url
        }
      });

    }).catch(error => {
      console.error(error);
    });
  }
  render() {
    return (
      <div className="ShopHeader">
        ShopHeader code needed.
      </div>
    );
  }
}

export default ShopHeader;
