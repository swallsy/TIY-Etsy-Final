import React, { Component } from "react";
import "../../styles/OrangeBar/EtsyKeepsYouSafe.css";
import "../../styles/OrangeBar/StartSellingOnEtsy.css";
import "../../styles/OrangeBar/WhatIsEtsy.css";

export default class OrangeBar extends Component {
  constructor(props) {
    super(props);

    this.chooseBar = this.chooseBar.bind(this);

    this.state = {};
  }

   chooseBar() {
    if (this.props.type === "safety") {
      return (
        <div className=" row safeContainer">
          <div className="col-2 safeImage">
            <img className="safeImage" src="https://www.etsy.com/assets/dist/images/homepage/vesta/trust_wide_left.20170228151449.png" />
          </div>
          <div className="col-8 safety-text">
            <div>
            <h1 className="row safety-heading">Etsy keeps you safe</h1>
            </div>
            <div className="row">
              <div className="col-4">
                <p className="safety-sub-heading">Trustworthy sellers</p>
                <p>
                  You can read their reviews and policies, and contact them with any questions
                </p>
              </div>
              <div className="col-4">
                <p className="safety-sub-heading">World-class security</p>
                <p>
                  Safeguarding your information is the top priority of our
                  dedicated security experts
                </p>
              </div>
              <div className="col-4">
                <p className="safety-sub-heading">Purchase protection</p>
                <p>
                  If anything goes wrong, our global support team has got your
                  back
                </p>
              </div>
            </div>
          </div>
          <div className="col-2 keyImage">
            <img src="https://www.etsy.com/assets/dist/images/homepage/vesta/trust_wide_right.20170228151449.png" />
          </div>
        </div>
      );
    } else if(this.props.type === "selling") {
            return (
                <div className="row">
                    <div className="col-4">
                        <img src="https://www.etsy.com/assets/dist/images/homepage/vesta/sell_on_etsy_left.20170228151449.png" />
                    </div>
                    <div className="col-4">
                        <h1 className="">Start selling on Etsy</h1>
                        <p>Millions of shoppers can't wait to see what you have in store.</p>
                        <p><a href="https://www.etsy.com/sell?ref=hp" target="_blank">Open a shop today</a> ></p>
                    </div>
                    <div className="col-4">
                        <img src="https://www.etsy.com/assets/dist/images/homepage/vesta/sell_on_etsy_right.20170228151449.png" />
                    </div>
                </div>
            )
        }
        else if(this.props.type === "whatIs") {
            return (
                <div className="row whatiscontainer">
                    <div className="col-4">
                        <img className="whatisimg1"  src="https://www.etsy.com/assets/dist/images/homepage/vesta/about_etsy_wide_left.20170228151449.png" />
                    </div>
                    <div className="col-3 whatistext">
                        <h1>What is Etsy?</h1>
                        <p>We're more than a marketplace.</p>
                        <p><a className="whatislink" href="https://www.etsy.com/mission?ref=hp&from=homepage.about_etsy" target="_blank">Read all about it <i className="fa fa-chevron-right"></i></a></p>
                    </div>
                    <div className="col-4">
                        <img className="whatisimg2"  src="https://www.etsy.com/assets/dist/images/homepage/vesta/about_etsy_wide_right.20170228151449.png" />
                    </div>
                </div>
            )
        }
    }

    render(){
        return (
            <div className="container">
                {this.chooseBar()}
      </div>
    );
  }
}
