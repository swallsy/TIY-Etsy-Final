import React, { Component } from 'react';




class DetailedCatCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      etsyListings: [],
      listing:[],
      detailedCategories: [
        {
          category: {
            name: "Jewelry",
            path: "jewelry/"
          },
          subCategories: {
            cat1: {
              name: "Necklaces",
              path: "necklaces"
            },
            cat2: {
              name: "Earings",
              path: "earings"
            },
            cat3: {
              name: "Bracelets",
              path: "bracelets"
            },
            cat4: {
              name: "Rings",
              path: "rings"
            }
          }
        },
        {
          category: {
            name: "Craft Supplies & Tools",
            path: "craft_supplies_and_tools/"
          },
          subCategories: {
            cat1: {
              name: "Jewelry & Beauty",
              path: "jewelry_and_beauty"
            },
            cat2: {
              name: "Sewing & Fiber",
              path: "sewing_and_fiber"
            },
            cat3: {
              name: "Paper, Party & Kids",
              path: "paper_party_and_kids"
            },
            cat4: {
              name: "Visual Arts",
              path: "visual_arts"
            }
          }
        },
        {
          category: {
            name: "Home & Living",
            path: "home_and_living/"
          },
          subCategories: {
            cat1: {
              name: "Home Décor",
              path: "home_decor"
            },
            cat2: {
              name: "Kitchen & Dining",
              path: "kithen_and_dining"
            },
            cat3: {
              name: "Bedding",
              path: "bedding"
            },
            cat4: {
              name: "Outdoor & Gardening",
              path: "outdoor_and_gardening"
            }
          }
        },
        {
          category: {
            name: "Art & Collectibles",
            path: "art_and_collectibles/"
          },
          subCategories: {
            cat1: {
              name: "Prints",
              path: "prints"
            },
            cat2: {
              name: "Collectibles",
              path: "collectibles"
            },
            cat3: {
              name: "Painting",
              path: "painting"
            },
            cat4: {
              name: "Photography",
              path: "photography"
            }
          }
        }
      ],
      categories: [
        {
          category: "Clothing",
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
    fetch('https://api.etsy.com/v2/listings/active?api_key=3yhxu7gn2ot24so9hzuqbxc9&limit=300&offset=0&page=1&categories=jewelry,craft_supplies_and_tools,home_and_living,art_and_collectibles,clothing,accessories,paper_and_party_supplies,weddings,bags_and_purses&includes=MainImage')
    .then(resp => resp.json())
      .then(resp => {
        console.log(resp)
        let listings = resp.results
        this.setState({etsyListings: listings})
        // eslint-disable-next-line
        let listingCard = this.state.detailedCategories.map((listing) => {
            let currentListings = listings.filter((currentListing) => {
              return currentListing.taxonomy_path.includes(listing.category.name);
            });
            console.log(currentListings);
            let randomListing = currentListings[Math.floor(Math.random() * currentListings.length)];
              console.log("random Listing below");
              console.log(randomListing);
              return (
                <div key={randomListing.id} className = "col-md-3">
                  <div className="card" >
                    <img className="card-img-top" src={randomListing.MainImage.url_170x135} alt="random jewelry" />
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
            });
            this.setState({listing: listingCard})
            console.log(this.state.listing);
          });

        }

      render() {
      return (
        <div className="row">
          {this.state.listing}
        </div>
      )
    }
  }




export default DetailedCatCard
