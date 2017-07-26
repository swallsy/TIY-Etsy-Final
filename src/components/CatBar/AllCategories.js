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
          {this.state.categories.slice(0,this.state.rowsToDisplay).map((categories, i) => <li key={i}>{categories}</li>)}
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
