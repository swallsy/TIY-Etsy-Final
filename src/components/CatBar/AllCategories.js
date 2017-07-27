import React, { Component } from 'react';

// export default class AllCategories extends Component {
//   constructor() {
//     super();
//     this.state = {
//       currentCategory:"All Categories",
//       categories: [
//         'Jewelry',
//         'Craft Supplies & Tools',
//         'Home & Living',
//         'Art & Collectibles',
//         'Clothing',
//         'Accessories',
//         'Paper & Party Supplies',
//         'Weddings',
//         'Bags & Purses',
//         'Bath & Beauty',
//         'Toys & Games',
//         'Books, Movies & Music',
//         'Electronics & Accessories',
//         'Pet Supplies',
//         'Shoes',
//       ]
//     };
//   }
//
//
//
//   render() {
//     let categories = this.state.categories.map((cat) => {
//       return(
//         <li>{cat}</li>
//       )
//     });
//     return(
//       <div className="card">
//         <ul className="categories_list">{this.state.currentCategory}
//           {categories}
//         </ul>
//       </div>
//     )
//   }
// }
//




export default class AllCategories extends Component {
  constructor() {
    super()


    this.state =  {
     currentCategory:"All Categories",
     categories: [
       {'name': 'Jewelry', 'link': 'https://www.etsy.com/c/jewelry?explicit=1'},
       {'name': 'Craft Supplies & Tools', 'link': 'https://www.etsy.com/c/craft-supplies-and-tools?explicit=1'},
       {'name': 'Home & Living', 'link': 'https://www.etsy.com/c/home-and-living?explicit=1'},
       {'name': 'Art & Collectibles', 'link': 'https://www.etsy.com/c/art-and-collectibles?explicit=1'},
       {'name': 'Clothing', 'link': 'https://www.etsy.com/c/clothing?explicit=1'},
       {'name': 'Accessories', 'link': 'https://www.etsy.com/c/accessories?explicit=1'},
       {'name': 'Paper & Party Supplies', 'link': 'https://www.etsy.com/c/paper-and-party-supplies?explicit=1'},
       {'name': 'Weddings', 'link': 'https://www.etsy.com/c/weddings?explicit=1'},
       {'name': 'Bags & Purses', 'link': 'https://www.etsy.com/c/bags-and-purses?explicit=1'},
       {'name': 'Bath & Beauty', 'link': 'https://www.etsy.com/c/bath-and-beauty?explicit=1'},
       {'name': 'Toys & Games', 'link': 'https://www.etsy.com/c/toys-and-games?explicit=1'},
       {'name': 'Books, Movies & Music', 'link': 'https://www.etsy.com/c/books-movies-and-music?explicit=1'},
       {'name': 'Electronics & Accessories', 'link': 'https://www.etsy.com/c/electronics-and-accessories?explicit=1'},
       {'name': 'Pet Supplies', 'link': 'https://www.etsy.com/c/pet-supplies?explicit=1'},
       {'name': 'Shoes', 'link': 'https://www.etsy.com/c/shoes?explicit=1'}
     ],
    rowsToDisplay : 4,
    expanded: false,
    }
    this.showMore = this.showMore.bind(this);
  }

  // showMore() {
  //   if (this.state.rowsToDisplay === 4) {
  //     this.setState({rowsToDisplay: 4, expanded: false})
  //     } else {
  //     this.setState({rowsToDisplay: this.state.categories.length, expanded: true})
  //   }
  // }

  showMore() {
    this.state.rowsToDisplay === 4 ?
      (this.setState({ rowsToDisplay: this.state.categories.length, expanded: true })) :
      (this.setState({ rowsToDisplay: 4, expanded: false }))
  }

  render() {
    return (
    <div className="container">
      <div className="row">
        <ul>
          {this.state.categories.slice(0,this.state.rowsToDisplay).map((categories, i) => <li key={i}><a href={categories.link}>{categories.name}</a></li>)}
        </ul>
      </div>
      <p>
        <a className="btn btn-primary" onClick={this.showMore}>
          {this.state.expanded ?
            (<span>- Show less</span>) : (<span>+ Show more</span>)}
        </a>
      </p>
    </div>
    )
  }
}
