import React, { Component } from "react";
import "../styles/Listing.css";
import "../styles/LikeBanner.css";

class LikeBanner extends Component {
  render() {
    return (
      <div className="LikeBanner col-12 myheader">
        <div className="buttondiv">
          <button className="button"><i className="fa fa-heart" />Favorite</button>
        </div>

        <div className="likeHeaders">
          <div className="like">Like this item?</div>
          <div className="add">Add it to your favorites to revisit it later</div>
        </div>
      </div>
    );
  }
}

export default LikeBanner;
