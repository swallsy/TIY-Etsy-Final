import React, { Component } from 'react';
import '../../styles/Home.css';

class Carousel extends Component {
  render () {
    return (
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">

        <div className="carousel-inner" role="listbox">

          <div className=" carousel-item active">
            <div className="carousel-caption d-none d-md-block" id="screen_1">
              <h1>You need these (almost) as much as sunscreen.</h1>
              <button>Shop for summer</button>
            </div>
            <img className="d-block img-fluid" src="https://img1.etsystatic.com/site-assets/vesta-homepage-headers-v3/summer-2017/summer-evergreen/summer_ever_1_2020x335.3.jpg" alt="First slide" />
          </div>

          <div className="carousel-item">
            <div className="carousel-caption d-none d-md-block" id="screen_2">
              <h1>Get the perfect thing for your get-together.</h1>
              <button>Celebrate summer</button>
            </div>
            <img className="d-block img-fluid" src="https://img1.etsystatic.com/site-assets/vesta-homepage-headers-v3/summer-2017/summer-occasion/summer_occasion_1_2020x335.3.jpg" alt="Second slide" />
          </div>

          <div className="carousel-item">
            <div className="carousel-caption d-none d-md-block" id="screen_3">
              <h1>Wear these for the next heat wave.</h1>
              <button>Shop summer jewelry</button>
            </div>
            <img className="d-block img-fluid" src="https://img1.etsystatic.com/site-assets/vesta-homepage-headers-v3/summer-2017/summer-jewelry/summer_jewelry_2020x335.0.jpg" alt="Third slide" />
          </div>

        </div>

        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>

        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>

      </div>
    )
  }
}

export default Carousel;
