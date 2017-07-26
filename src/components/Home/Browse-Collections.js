import React, { Component } from 'react';
import '../../styles/Home.css';
import '../../styles/BrowseCollections.css';
// left image https://www.etsy.com/featured/personalized-and-custom-jewelry?ref=fp

// right image https://www.etsy.com/featured/dorm-decor?ref=fp

class BrowseCollections extends Component {
  render() {
    return (
  <div className="browse-collections">
    <h1 className="browse-collections-header">Browse Collections</h1>
    <div className="row">
        <div className="col-sm-6">
              <div className="browse-collection-item">
                <img className="browse-collection-img" src={require("./images/leftimage.png")}></img>
                <div className="browse-collections-text">
                  <h1 className="browse-collections-text-header">Editor's pick</h1>
                  <p className="browse-collections-text-content">Personalized and custom jewlery</p>
                </div>
              </div>
        </div>

        <div className="col-sm-6">
            <div className="browse-collection-item">
              <img className="browse-collection-img" src={require("./images/rightimage.png")}></img>
                <div className="browse-collections-text">
                  <h1 className="browse-collections-text-header">Editor's pick</h1>
                  <p className="browse-collections-text-content">Dorm decor</p>
                </div>
            </div>
        </div>
    </div>
    <div className="browse-collections-seemore">See More <i className="fa fa-chevron-right"></i></div>
  </div>

  )
  }
}

export default BrowseCollections;
