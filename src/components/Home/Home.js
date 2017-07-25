import React, { Component } from 'react';
import '../../styles/Home.css';
import OrangeBar from './OrangeBar/OrangeBar.js'
import ShopCards from './ShopCards/ShopCards.js'
import Carousel from './Carousel.js'
import InfoCards from './InfoCards.js';
import Header from '../Header/Header.js';

import '../../styles/Carousel.css';


export default class Home extends Component {
  render() {
    return (
      <div className='Home'>
          <Header />
          <Carousel />
          <InfoCards />
          <ShopCards type="category" />
          {/* <BrowseCollections /> */}
          <ShopCards type="gifts"/>
          <OrangeBar type="safety" />
          {/* <RecentReviews /> */}
          <OrangeBar type="selling"/>
          {/* <FreshBlog /> */}
          <OrangeBar type="whatIs"/>
          
      </div>
    );
  }
}
