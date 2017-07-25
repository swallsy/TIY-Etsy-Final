import React, { Component } from 'react';


class DetailedCatCard extends Component {
      render() {
        let catImage = this.props.images.map(image => {
        return (
          <div key = {listing.id} className = "col-md-4">
            <div className="card" >
    //I'm a little unsure here of how we will select an image, since we're querying
    //for category not for particular products. Thoughts?
                <img className="card-img-top" src="{listing.image}" />
                <div className="card-block">
                  <h2 className="card-title">
                    <button><Link to="https://www.etsy.com/c/jewelry">{Jewelry}</Link></button>
                  </h2>
    //Also here, we will need to figure out how to select multiple sub-categories
    //and list them here. Do we need a second .map thing so we can loop through
    //the array of sub-categories?
                  <p className="card-text">
                    <button><Link to="https://www.etsy.com/c/jewelry/necklaces">Necklaces</Link></button>
                  </p>
                  <p className="card-text">
                    <button><Link to="https://www.etsy.com/c/jewelry/earrings">Earrings</Link></button>
                  </p>
                  <p className="card-text">
                    <button><Link to="https://www.etsy.com/c/jewelry/bracelets">Bracelets</Link></button>
                  </p>
                  <p className="card-text">
                    <button><Link to="https://www.etsy.com/c/jewelry/necklaces">Rings</Link></button>
                  </p>
                  <button><Link to="https://www.etsy.com/c/jewelry">Shop All Jewelry</Link></button>
              </div>
            </div>
          </div>
          )
        })
        return (
          <div className="container">
            {detailedCatItem}
          </div>
        )
