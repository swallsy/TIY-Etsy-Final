// import React, {Component} from 'react';
//
// import CatCards from './CatBody/CatCards.js';
// import DetailedCatCard from './CatBody/DetailedCatCards.js';
// import ProductCards from './CatBody/ProductCards.js';

// class CatBody extends Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       listings: []
//     }
//
// }
//   componentDidMount() {
//     fetch('https://api.etsy.com/v2/listings/active?api_key=3yhxu7gn2ot24so9hzuqbxc9&categories=jewelry,craft_supplies_and_tools,home_and_living,art_and_collectibles,clothing,accessories,paper_and_party_supplies,weddings,bags_and_purses&includes=MainImage')
//     .then(results => {
//       return results.json();
//     })
//       .then(data => {
//         this.setState({listings: data});
//         console.log("state", this.state.listings);
//       })
//   }
//
//   render() {
//     return (
//       <div className = "container" >
//         <DetailedCatCard listings={this.state.listings} />
//       </div>
//       )
//    }
// }
//
// export default CatBody













//       return (
//         <div key={key} className="col-sm-6 col-md-4">
//           <div className="thumbnail">
//             <img className="" src={imgUrl} alt={description}/>
//             <div className="caption">
//               <p className="lead truncate">{title}</p>
//               <hr className="divider"/>
//               <p className="text-center truncate">{description}</p>
//               <span className="text-center pull-left">{author || 'IGN'}</span>
//               <a href={url} className="btn btn-danger" target="_blank">Read more!</a>
//             </div>
//           </div>
//         </div>
//       )
//     });
//     return (
//       <div className="col-md-10 col-md-offset-1">
//         <button className="btn btn-danger" onClick={this.props.onClick}>Click me!</button>
//         <hr className="divider"/>
//         <div className="col-md-12">
//           <div className="row">
//             {/* Pass in the loader via props.*/}
//             { this.props.loader }
//             {/* Pass in the renderFeed object. */}
//             { renderFeed }
//           </div>
//         </div>
//       </div>
//     )
//   }
// }
// class Loader extends Component {
//   render() {
//     return (
//       <div className="col-md-12">
//         <div className="loader"></div>
//       </div>
//     )
//   }
// }
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       randomFeed: [],
//       feed: [],
//       loader: <Loader/>,
//       fav: ''
//     }
//     this.randomizer = this.randomizer.bind(this);
//   }
//   randomizer() {
//     // We want to render a set of six random news headlines from the API data.
//     // We can simply use Math.floor() to create a random set of healines, but
//     // one side effect is that we get duplicates. Therefore, we use the method below to
//     // remove duplicates.
//     let newsFeed = this.state.feed;
//     let tmp = newsFeed.slice(newsFeed);
//     let randomArray = [];
//     // We use a for loop to iterate over the length of the array six time.
//     // Then we grab a random news headline in each iteration, removing duplicates.
//     for (let i = 0; i < 6; i++) {
//       let index = Math.floor(Math.random() * tmp.length);
//       let removed = tmp.splice(index, 1);
//       // Since we are only removing one element
//       randomArray.push(removed[0]);
//     }
//     // Set state. When the button is clicked, set the state for randomFeed and the loader.
//       this.setState({
//         randomFeed: randomArray,
//         loader: ''
//       })
//   }
//   componentWillMount() {
//   // Set your API URL with the API key.
//   let url = `https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=${apiKey}`
//   // We use regex to extract website name.
//   let extract = url.match(/source=\=*(.*?)\s*&s/).pop();
//   // We set site name to state.
//   this.setState({site: extract})
//   // Fetch data from API
//   fetch(url).then((response) => {
//     return response.json()
//   }).then((data) => {
//     let articles = data.articles;
//     this.setState({feed: articles})
//   });
// }
// render() {
//   return (
//     <div className="App row">
//       <div className="col-md-12 hd">
//         <h1 className="hd-title">{this.state.site}</h1>
//         <h2 className="hd-sub">News Randomizer</h2>
//       </div>
//       {/* Share state with the child*/}
//       <Feed
//         feed={this.state.randomFeed}
//         onClick={this.randomizer}
//         loader={this.state.loader}
//       />
//     </div>
//   );
// }
// }
// export default App;
