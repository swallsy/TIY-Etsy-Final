import React, { Component } from 'react';

export default class AllCategories extends Component {
  constructor() {
    super();
    this.state = {
      currentCategory:"All Categories",
      categories: [
        'Jewelry',
        'Craft Supplies & Tools',
        'Home & Living',
        'Art & Collectibles',
        'Clothing',
        'Accessories',
        'Paper & Party Supplies',
        'Weddings',
        'Bags & Purses',
        'Bath & Beauty',
        'Toys & Games',
        'Books, Movies & Music',
        'Electronics & Accessories',
        'Pet Supplies',
        'Shoes',
      ]
    };
  }



  render() {
    let categories = this.state.categories.map((cat) => {
      return(
        <li>{cat}</li>
      )
    });
    return(
      <div className="card">
        <ul className="categories_list">{this.state.currentCategory}
          {categories}
        </ul>
      </div>
    )
  }
}
