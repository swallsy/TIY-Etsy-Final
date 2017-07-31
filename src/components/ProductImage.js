import React, {Component} from "react";
import 'react-bootstrap-carousel/dist/bootstrap.min.css';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
import {React_Bootstrap_Carousel} from 'react-bootstrap-carousel';
import "../styles/App.css";
import '../styles/ProductImage.css'


class ProductImage extends Component {
  constructor() {
    super();
    this.state = {
      pictures: [],
			shopimage: '',
			shopIdConvo: ''
    }
  }
  componentDidMount() {
    // here's the fetch we need for this section
		fetch('https://openapi.etsy.com/v2/listings/' + this.props.listingId + '/images?fields=url_570xN,listing_image_id&api_key=nrfza0h31bu4g5biq6bq6g4c').then(response => {
      return response.json();
    }).then(data => {
      console.log(data.results);
      let pictures = data.results.map((pic) => {
        return (

          <div className='pic justify-content-center ' key={pic.listing_image_id}>
            <img src={pic.url_570xN} className="imageItself"/>
          </div>

        )
      })
      console.log(pictures);
      this.setState({pictures: pictures});
    });
    fetch('https://openapi.etsy.com/v2/listings/' + this.props.listingId + '?includes=Shop/User/Feedback,Shop/Listings/MainImage&api_key=nrfza0h31bu4g5biq6bq6g4c').then(response => {
      return response.json();
    }).then(data => {
			this.setState({shopimage: data.results[0].Shop.icon_url_fullxfull});
			console.log(this.state.shopimage)
			this.setState({shopIdConvo: "https://www.etsy.com/conversations/new?with_id="+ data.results[0].user_id })
      })
  }

  render() {
    return (
      <div className = 'listingImageWrapper  justify-content-center '>
				<div className = 'listingImage justify-content-center '>
	        <React_Bootstrap_Carousel animation={true} onSelect={this.onSelect} className="carousel-fade justify-content-center ">
	          {this.state.pictures}
	        </React_Bootstrap_Carousel>
				</div>
				<div className='requestbox row'>
					<div className='col-2'>
						<img className='requestthumbnail' src={this.state.shopimage}>
						</img>
					</div>
					<div className='requestboxtext col-10'>
						<span><a className='orangelink' href={this.state.shopIdConvo}>
							Request a custom order </a>
					 	and have something made just for you.
					</span>
				 	</div>
				</div>
      </div>

    )
};
}
export default ProductImage;
