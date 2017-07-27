import React, { Component } from 'react';

export default class DetailedCatCard extends Component {
  render() {
    let detailedCategories = this.props.detailedCategories;
    let etsyListings = this.props.etsyListings;
    let detailedCatCard = detailedCategories.map((listing) => {
      let filteredListings = etsyListings.filter((filteredListing) => {
        return filteredListing.taxonomy_path.includes(listing.category.name);
      });
      let randomListing = filteredListings[Math.floor(Math.random() * filteredListings.length)];
        return (
          <div key={randomListing.listing_id} className = "col-md-3">
            <div className="card" >
              <a href={randomListing.url}><img className="card-img-top"     src={randomListing.MainImage.url_170x135} alt="random jewelry" /></a>
              <div className="card-block">
                <h2 className="card-title">
                  <a href={"https://www.etsy.com/c/" + listing.category.path}>{listing.category.name}</a>
                </h2>
                <p className="card-text">
                  <a href={"https://www.etsy.com/c/" + listing.category.path +
                  listing.subCategories.cat1.path}>{listing.subCategories.cat1.name}</a>
                </p>
                <p className="card-text">
                  <a href={"https://www.etsy.com/c/" + listing.category.path +
                  listing.subCategories.cat2.path}>{listing.subCategories.cat2.name}</a>
                </p>
                <p className="card-text">
                  <a href={"https://www.etsy.com/c/" + listing.category.path +
                  listing.subCategories.cat3.path}>{listing.subCategories.cat3.name}</a>
                </p>
                <p className="card-text">
                  <a href={"https://www.etsy.com/c/" + listing.category.path +
                  listing.subCategories.cat4.path}>{listing.subCategories.cat4.name}</a>
                </p>
                  <a href={"https://www.etsy.com/c/" + listing.category.path}>Shop all  {listing.category.name}</a>
              </div>
            </div>
          </div>
        )
      })
    return (
      <div className="row">
        {detailedCatCard}
      </div>
    )
  }
}
