import React, { Component } from 'react';




class DetailedCatCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      etsyListings: [],
      detailedCategories: [
        {
          category: "Jewelry"
        },
        {
          category: "Craft Supplies & Tools"
        },
        {
          category: "Home & Living"
        },
        {
          category: "Art & Collectibles"
        },
        {
          category: "Clothing"
        },
        {
          category: "Accessories"
        },
        {
          category: "Paper & Party Supplies"
        },
        {
          category: "Weddings"
        },
        {
          category: "Bags & Purses"
        }
      ]

    }

  }
  componentDidMount() {
    fetch('https://api.etsy.com/v2/listings/active?api_key=3yhxu7gn2ot24so9hzuqbxc9&limit=100&offset=0&page=1&categories=jewelry,craft_supplies_and_tools,home_and_living,art_and_collectibles,clothing,accessories,paper_and_party_supplies,weddings,bags_and_purses&includes=MainImage')
    .then(resp => resp.json())
      .then(resp => {
        console.log(resp)
        let listings = resp.results
        this.setState({etsyListings: listings})
        // eslint-disable-next-line
        let listingCard = listings.map((listing) => {
          if (listing.taxonomy_path.includes("Jewelry")) {
            console.log(listings)
            let jewelryListings = listings.filter((jewelryListing) => {
              return jewelryListing.taxonomy_path.includes("Jewelry");
            })
            console.log(jewelryListings);
            let jewelryListing = jewelryListings[Math.floor(Math.random() * jewelryListings.length)]
              console.log(jewelryListing);
              return (
                <div key={jewelryListing.id} className = "col-md-4">
                  <div className="card" >
                    <img className="card-img-top" src="{jewelryListing.MainImage.url_170x135}" alt="random jewelry" />
                    <div className="card-block">
                      <h2 className="card-title">
                        <a to="https://www.etsy.com/c/jewelry">Jewelry</a>
                      </h2>
                      <p className="card-text">
                        <a to="https://www.etsy.com/c/jewelry/necklaces">Necklaces</a>
                      </p>
                      <p className="card-text">
                        <a to="https://www.etsy.com/c/jewelry/earrings">Earrings</a>
                      </p>
                      <p className="card-text">
                        <a to="https://www.etsy.com/c/jewelry/bracelets">Bracelets</a>
                      </p>
                      <p className="card-text">
                        <a to="https://www.etsy.com/c/jewelry/necklaces">Rings</a>
                      </p>
                        <a to="https://www.etsy.com/c/jewelry">Shop All Jewelry</a>
                    </div>
                  </div>
                </div>
              )
            }
          })
          this.setState({listings: listingCard})
          console.log(this.state.listings);
        })
      }
      render() {
      return (
        <div className="container">
          {this.state.listing}
        </div>
      )
    }
  }




export default DetailedCatCard
