import React, {Component} from 'react';

export default class CatCards extends Component  {
  constructor() {
      super()
      this.state = {
        listings: []
      }
  }

  componentDidMount() {
    fetch('https://openapi.etsy.com/v2/listings/active?api_key=3yhxu7gn2ot24so9hzuqbxc9')
      .then (response => response.json())
      .then (response => {
        console.log(response);

        let catCards = response.results.map(listing => {
            return (
              <div className="card" style="width: 20rem;">
                 <img className="card-img-top" src="{Card image}" alt="Card image cap">
                 <div className="card-block">
                   <h4 className="card-title">{Card title}</h4>
                   <a href="#" className="btn btn-primary">Go somewhere</a>
                 </div>
                </div>
              </div>
              )
          })
          this.setState({listings: catCards})
          console.log(this.state.listings);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return(
      <div className="cards">
        {this.state.listings}
      </div>
    )
  }
}
