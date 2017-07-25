import React, { Component } from "react";
import "../../styles/Home.css";

class InfoCards extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-4">
          <div className="card infocard">
            <div className="card-block">
              <div className="checkmark-title">
                <img
                  className="card-img-top"
                  src={require("./images/Orange-CheckMark-InfoCards.png")}
                />
                <h5 className="card-title">Unique Everything</h5>
              </div>
              <p className="card-text">
                We have millions of one-of-a-kind items, so you can find
                whatever you need (or really, really want).
              </p>
            </div>
          </div>
        </div>

        <div className="col-sm-4">
          <div className="card infocard">
            <div className="card-block">
              <img
                className="card-img-top"
                src={require("./images/Orange-CheckMark-InfoCards.png")}
              />
              <h5 className="card-title">Independent Sellers</h5>
              <p className="card-text">
                Buy directly from someone who put their heart and soul into
                making something special.
              </p>
            </div>
          </div>
        </div>

        <div className="col-sm-4">
          <div className="card infocard">
            <div className="card-block">
              <img
                className="card-img-top"
                src={require("./images/Orange-CheckMark-InfoCards.png")}
              />
              <h5 className="card-title">Secure Shopping</h5>
              <p className="card-text">
                We use best-in-class technology to protect your transactions.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InfoCards;
