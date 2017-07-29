import React, { Component } from 'react';


class CatCard extends Component {
  render() {
    let categories = this.props.categories;
    let etsyListings = this.props.etsyListings;
    let catCard = categories.map((listing) => {
      let filteredListings = etsyListings.filter((filteredListing) => {
          if (filteredListing.state == "active") {
            return filteredListing.taxonomy_path.includes(listing.category.name);
          }
      });
        let randomListing = filteredListings[Math.floor(Math.random() * filteredListings.length)];
        return (
          <div key={randomListing.listing_id} className = "col-md-3">
            <div className="card" >
              <a href={randomListing.url}><img className="card-img-top" src={randomListing.MainImage.url_170x135} alt="random jewelry" /></a>
              <div className="card-block">
                <h2 className="card-title">
                  <a href={"https://www.etsy.com/c/" + listing.category.path}>{listing.category.name}</a>
                </h2>
              </div>
            </div>
          </div>
        )
    })
    return (
      <div className="row">
        {catCard}
      </div>
    )
  }
}

export default CatCard
