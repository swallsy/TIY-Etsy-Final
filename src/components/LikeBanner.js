import React, { Component } from "react";
import "../styles/App.css";

class LikeBanner extends Component {
  render() {
    return (
      <div className="LikeBanner col-12 bg-warning">
        <div>
          <button className="button">Favorite</button>
        </div>

        <div className="likeHeaders">
          <h3>Like that item?</h3>
          <h5>Add it to your favorites to revisit it later</h5>
        </div>
      </div>
    );
  }
}

export default LikeBanner;
