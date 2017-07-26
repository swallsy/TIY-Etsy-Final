import React, { Component } from 'react';
import '../../styles/Home.css';
import '../../styles/BrowseCollections.css';
// left image https://www.etsy.com/featured/personalized-and-custom-jewelry?ref=fp

// right image https://www.etsy.com/featured/dorm-decor?ref=fp

class BrowseCollections extends Component {
  render() {
    return (

    <div className="row browse-collections">
        <div className="col-sm-6">
              <div className="browse-collection-item">
                <img className="browse-collection-img" src={require("./images/leftimage.png")}></img>
                <div className="browse-collections-text">
                  <h1>hi</h1>
                  <p>hello</p>
                </div>
              </div>
        </div>

        <div className="col-sm-6">
            <div className="browse-collection-item">
              <img className="browse-collection-img" src={require("./images/rightimage.png")}></img>
            </div>
        </div>
    </div>
  )
  }
}

export default BrowseCollections;
