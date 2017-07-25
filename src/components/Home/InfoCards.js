import React, { Component } from "react";
import "../../styles/InfoCards.css";

class InfoCards extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-4">
          <div className="card infocard">
            <div className="card-block">
              <div className="infoCardBlock">
                <div className="infoCardCol-1">
                  <img
                    className="card-img-top infoCardIcon"
                    src={require("./images/infocard-1.png")}
                  />
                </div>

                <div className="infoCardCol-2" colspan="2">
                  <h5 className="card-title">Unique Everything</h5>
                  <p className="card-text">
                    We have millions of one-of-a-kind items, so you can find
                    whatever you need (or really, really want).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-4">
          <div className="card infocard">
            <div className="card-block">
              <div className="infoCardBlock">
                <div className="infoCardCol-1">
                  <img
                    className="card-img-top infoCardIcon"
                    src={require("./images/infocard-2.png")}
                  />
                </div>
                <div className="infoCardCol-2">
                  <h5 className="card-title">Independent Sellers</h5>
                  <p className="card-text">
                    Buy directly from someone who put their heart and soul into
                    making something special.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-4">
          <div className="card infocard">
            <div className="card-block">
              <div className="infoCardBlock">
                <div className="infoCardCol-1">
                  <img
                    className="card-img-top infoCardIcon"
                    src={require("./images/infocard-3.png")}
                  />
                </div>
                <div className="infoCardCol-2">
                  <h5 className="card-title">Secure Shopping</h5>
                  <p className="card-text">
                    We use best-in-class technology to protect your
                    transactions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InfoCards;
