import React, { Component } from 'react';
import '../../styles/Home.css';
import Nav from '../Header/Nav.js'
import OrangeBar from './OrangeBar/OrangeBar.js'

export default class Home extends Component {
  render() {
    return (
      <div className='Home'>
          {/* <Header /> */}
          {/* <Carousel /> */}
          {/* <InfoCards /> */}
          {/* <ShopCards {category} /> */}
          {/* <BrowseCollections /> */}
          {/* <ShopCards {gifts} /> */}
          <OrangeBar type="safety" />
          {/* <RecentReviews /> */}
          <OrangeBar type="selling"/>
          {/* <FreshBlog /> */}
          <OrangeBar type="whatIs"/>
          <h1>You're good to go. Now make Etsy!</h1>
      </div>
    );
  }
}
