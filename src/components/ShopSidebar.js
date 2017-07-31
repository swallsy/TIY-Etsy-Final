import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/ShopSidebar.css';

class ShopSidebar extends Component {
  constructor() {
    super();

    // declaring some stuff we'll need later when it renders
    this.state = {
      results: {},
      shop_name: '',
      shop_url: '',
      shop_picurl: '',
      shop_listings: []
    };
  }

  componentDidMount() {
    // here's the fetch we need for this section
    fetch(
      'https://openapi.etsy.com/v2/listings/' + this.props.listingId + '?includes=Shop/Listings/MainImage&api_key=nrfza0h31bu4g5biq6bq6g4c'
    )
      .then(response => response.json())
      .then(response => {
        // get the array for the shop's listings, make only 8 cards
        let tempListings = [];
        for (let i = 0; tempListings.length < 8; i++) {
          // sometimes the image or item listing doesn't exist, so this is to catch that and only push it into the tempListings array if it does exist
          if (response.results[0].Shop.Listings[i].MainImage) {
            tempListings.push(response.results[0].Shop.Listings[i]);
          }
        }
        // now let's iterate through the tempListings array and make some renderable array entries for the main render below
        let shopListingsCards = tempListings.map(listing => {
          let title = listing.title;
          if (title.length > 25) {
            title = title.slice(0, 24) + "...";
          }
          return (
            <div
              className="columncards card-sm shop-listings-card justify-content-center"
              key={listing.listing_id}
            >
              <a href={listing.url}>
                <div>
                  <img
                    alt="stuff"
                    src={listing.MainImage.url_fullxfull}
                    className="shop-listings-card-pic"
                  />
                </div>
                <div className="desc">
                  <p className="title">
                    {title}
                  </p>
                  <p className="price">
                    ${listing.price}
                  </p>
                </div>
              </a>
            </div>
          );
        });

        let shopListingsGroups = [];
        for (let i = 0; shopListingsGroups.length < 4; i += 2) {
          shopListingsGroups.push(
            <div className="row">
              {shopListingsCards[i]}
              {shopListingsCards[i + 1]}
            </div>
          );
        }

        this.setState({
          results: response.results,
          shop_name: response.results[0].Shop.shop_name,
          shop_url: response.results[0].Shop.url,
          shop_picurl: response.results[0].Shop.icon_url_fullxfull,
          shop_listings: shopListingsGroups
        });
      });
  }

  render() {
    console.log(this.state);

    return (
      <div className="ShopSidebar justify-content-center">
        <div className="picture justify-content-center">
	        <img
	          alt="stuff"
	          className="shop-sidebar-shop-pic"
	          src={this.state.shop_picurl}
	        />
	      </div>
				<br/>
	      <div className="description justify-content-center">
	        <a href={this.state.shop_url}>
	          <h3>
	            {this.state.shop_name}
	          </h3>
	        </a>
				</div>
        <div className="shop-listings-cards">
          {this.state.shop_listings}
        </div>
      </div>
    );
  }
}

export default ShopSidebar;
