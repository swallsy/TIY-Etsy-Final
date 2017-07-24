import React, { Component } from 'react';
import '../../styles/Home.css';

class Carousel extends Component {
  render () {
    return (
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">

        <div className="carousel-inner" role="listbox">

          <div className=" carousel-item active" id="screen_1">
            <div className="carousel-caption d-none d-md-block">
              <h1>You need these (almost) as much as sunscreen</h1>
              <button>Shop for Summer</button>
            </div>
            <img className="d-block img-fluid" src="https://img1.etsystatic.com/site-assets/vesta-homepage-headers-v3/summer-2017/summer-evergreen/summer_ever_1_2020x335.3.jpg" alt="First slide" />
          </div>

          <div className="carousel-item" id="screen_2">
            <img className="d-block img-fluid" src="..." alt="Second slide" />
          </div>

          <div className="carousel-item" id="screen_3">
            <img className="d-block img-fluid" src="..." alt="Third slide" />
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
