import React, { Component } from 'react';
import '../../styles/Carousel.css';
import Carousel from './Carousel.js'

export default class Home extends Component {
  render() {
    return (
      <div className='Home'>
          <h1>You're good to go. Now make Etsy!</h1>
          {/* <Header /> */}
          <Carousel />
          {/* <InfoCards /> */}
          {/* <ShopCards {category} /> */}
          {/* <BrowseCollections /> */}
          {/* <ShopCards {gifts} /> */}
          {/* <OrangeBar {safety} /> */}
          {/* <RecentReviews /> */}
          {/* <OrangeBar {selling} /> */}
          {/* <FreshBlog /> */}
          {/* <OrangeBar {WhatIsEtsy} /> */}

      </div>
    );
  }
}
