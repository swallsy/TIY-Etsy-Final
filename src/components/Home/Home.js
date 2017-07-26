import React, { Component } from 'react';
import '../../styles/Home.css';
import OrangeBar from './OrangeBar.js'
import ShopCards from './ShopCards/ShopCards.js'
import Carousel from './Carousel.js'
import InfoCards from './InfoCards.js';
import Header from '../Header/Header.js';
import FreshBlog from './FreshBlog.js';

export default class Home extends Component {
  render() {
    return (
      <div className='Home'>
          <Header />
          <Carousel />
          <InfoCards />
          <ShopCards type="category" />
          <h1>Browse Collections Goes here</h1>
          {/* <BrowseCollections /> */}
          <ShopCards type="gifts"/>
          <OrangeBar type="safety" />
          <h1>Recent Reviews goes here</h1>
          {/* <RecentReviews /> */}
          <OrangeBar type="selling"/>
          <FreshBlog type="blog"/>
          <OrangeBar type="whatIs"/>
      </div>
    )
  }
}
