import React, { Component } from 'react';
import '../../styles/Home.css';
<<<<<<< HEAD
import Nav from '../Header/Nav.js'
import OrangeBar from './OrangeBar.js'
=======
import OrangeBar from './OrangeBar/OrangeBar.js'
>>>>>>> f96521f5abc7cf37d8250008b160fb2180fe96c2
import ShopCards from './ShopCards/ShopCards.js'
import Carousel from './Carousel.js'
import InfoCards from './InfoCards.js';
import Header from '../Header/Header.js';
import FreshBlog from './FreshBlog.js';
import '../../styles/Carousel.css';
export default class Home extends Component {
  render() {
    return (
      <div className='Home'>
<<<<<<< HEAD
          {/* <Header /> */}
=======
          <Header />
>>>>>>> f96521f5abc7cf37d8250008b160fb2180fe96c2
          <Carousel />
          <InfoCards />
          <ShopCards type="category" />
          {/* <BrowseCollections /> */}
          <ShopCards type="gifts"/>
          <OrangeBar type="safety" />
          {/* <RecentReviews /> */}
          <OrangeBar type="selling"/>
          <FreshBlog type="blog"/>
          <OrangeBar type="whatIs"/>

      </div>
    );
  }
}
