import React, { Component } from 'react';
import '../../styles/RecentReviews.css';

class RecentReviews extends Component {
  render () {
    return (
      <div id="main-wrapper">
        <div className="container-fluid">
          <h2 id="title">Recent reviews from happy people</h2>
            <div className="row all-cards">

              <div className="col-md-4 individual-card card-block" id="card-1">
                <div className="profile-pics" id="profile-pic-1"></div>
                <div className="info-container">
                  <div className="user-info">
                    <span>VinylDolly </span><span id="light-gray">wrote on July 22</span>
                    <div className="rating">
                      <i className="fa fa-star star" aria-hidden="true"></i>
                      <i className="fa fa-star star" aria-hidden="true"></i>
                      <i className="fa fa-star star" aria-hidden="true"></i>
                      <i className="fa fa-star star" aria-hidden="true"></i>
                      <i className="fa fa-star star" aria-hidden="true"></i>
                    </div>
                    <p>Excellent quality and fast shipping. Thank you!</p>
                  </div>
                  <a className="product-description" href="https://www.etsy.com/listing/114099821/antique-key-pattern-black?ref=hp_sr">
                    <div className="product-picture" id="product-picture-1"></div>
                    <p>Antique Key Pattern - Black</p>
                  </a>
                </div>
              </div>

              <div className="col-md-4 individual-card card-block" id="card-2">
                <div className="profile-pics" id="profile-pic-2"></div>
                  <div className="info-container">
                    <div className="user-info">
                      <span>Gerritt </span><span id="light-gray">wrote on July 25</span>
                      <div className="rating">
                        <i className="fa fa-star star" aria-hidden="true"></i>
                        <i className="fa fa-star star" aria-hidden="true"></i>
                        <i className="fa fa-star star" aria-hidden="true"></i>
                        <i className="fa fa-star star" aria-hidden="true"></i>
                        <i className="fa fa-star star" aria-hidden="true"></i>
                      </div>
                      <p>Beautifully crafted, really nice piece!</p>
                    </div>

                    <a className="product-description" href="https://www.etsy.com/listing/59551251/strange?ref=hp_sr">
                      <div className="product-picture" id="product-picture-2"></div>
                      <p>Strange</p>
                    </a>
                  </div>
              </div>

              <div className="col-sm-4 individual-card card-block" id="card-3">
                <div className="profile-pics" id="profile-pic-3"></div>
                  <div className="info-container">
                    <div className="user-info">
                      <span>Mackenzie </span><span id="light-gray">wrote on July 25</span>
                      <div className="rating">
                        <i className="fa fa-star star" aria-hidden="true"></i>
                        <i className="fa fa-star star" aria-hidden="true"></i>
                        <i className="fa fa-star star" aria-hidden="true"></i>
                        <i className="fa fa-star star" aria-hidden="true"></i>
                        <i className="fa fa-star star" aria-hidden="true"></i>
                      </div>
                      <p>Really easy mask to make just have to remember there is 4 fins to glue on the body of it.</p>
                    </div>

                    <a className="product-description" href="https://www.etsy.com/listing/239893495/fish-head-mask-complete-with-fish-body?ref=hp_sr">
                      <div className="product-picture" id="product-picture-3"></div>
                      <p>Fish Head Mask Complete with Fish Body</p>
                    </a>
                  </div>

              </div>

        </div>
      </div>
    </div>
    )
  }
}





export default RecentReviews;
