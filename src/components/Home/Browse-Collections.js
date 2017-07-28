import React, { Component } from 'react';
import '../../styles/Home.css';
import '../../styles/BrowseCollections.css';
// left image https://www.etsy.com/featured/personalized-and-custom-jewelry?ref=fp

// right image https://www.etsy.com/featured/dorm-decor?ref=fp

class BrowseCollections extends Component {
  render() {
    return (
  <div className="browse-collections">
    <h1 className="browse-collections-header">Browse our latest collections</h1>
    <div className="row">
      <div className="col-sm-6">
              <a className="browse-collection-item" href="https://www.etsy.com/featured/personalized-and-custom-jewelry?ref=fp">
                <img className="imgFix browse-collection-img" src={require("./images/leftimage.jpg")}></img>
                <div className="browse-collections-text">
                  <h1 className="browse-collections-text-header">Editor's pick</h1>
                  <p className="browse-collections-text-content">Personalized and custom jewlery</p>
                </div>
              </a>
      </div>

        <div className="col-sm-6">
                <a className="browse-collection-item" href="https://www.etsy.com/featured/dorm-decor?ref=fp">
                  <img className="imgFix browse-collection-img" src={require("./images/rightimage.jpg")}></img>
                  <div className="browse-collections-text">
                    <h1 className="browse-collections-text-header">Editor's pick</h1>
                    <p className="browse-collections-text-content">Dorm decor</p>
                  </div>
                </a>
        </div>
    </div>
    <a href="https://www.etsy.com/featured?ref=hpsm">
    <div className="browse-collections-seemore">See More <i className="fa fa-chevron-right"></i></div>
    </a>
  </div>

  )
  }
}

export default BrowseCollections;
