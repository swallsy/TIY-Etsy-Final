import React, { Component } from 'react';
import '../../styles/OrangeBar/EtsyKeepsYouSafe.css';
import '../../styles/OrangeBar/StartSellingOnEtsy.css';
import '../../styles/OrangeBar/WhatIsEtsy.css';

export default class OrangeBar extends Component {
    constructor(props){
        super(props)

        this.chooseBar = this.chooseBar.bind(this)

        this.state = {

        }
    }

    chooseBar(){
        if(this.props.type === "safety") {
            return (
                <div className="container row">
                    <div className="col-2">
                        <img src="https://www.etsy.com/assets/dist/images/homepage/vesta/trust_wide_left.20170228151449.png"/>
                    </div>
                    <div className="col-8 safety-text">
                        <h1 className="row orange-bar-heading">Etsy keeps you safe</h1>
                        <div className="row">
                            <div className="col-4">
                                <p>Trustworthy sellers</p>
                                <p>You can read their reviews and policies, and contact them with any questions</p>
                            </div>
                            <div className="col-4">
                                <p>World-class security</p>
                                <p>Safeguarding your information is the top priority of our dedicated security experts</p>
                            </div>
                            <div className="col-4">
                                <p>Purchase protection</p>
                                <p>If anything goes wrong, our global support team has got your back</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                        <img src="https://www.etsy.com/assets/dist/images/homepage/vesta/trust_wide_right.20170228151449.png" />
                    </div>
                </div>
            )
        }
        else if(this.props.type === "selling") {
            return (
                <div className="container row">
                    <div className="col-4">
                        <img src="https://www.etsy.com/assets/dist/images/homepage/vesta/sell_on_etsy_left.20170228151449.png" />
                    </div>
                    <div className="col-4">
                        <h1 className="orange-bar-heading">Start selling on Etsy</h1>
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
                <div className="container row">
                    <div className="col-5">
                        <img src="https://www.etsy.com/assets/dist/images/homepage/vesta/about_etsy_wide_left.20170228151449.png" />
                    </div>
                    <div className="col-2">
                        <h1 className="orange-bar-heading">What is Etsy?</h1>
                        <p>We're more than a marketplace.</p>
                        <p><a href="https://www.etsy.com/mission?ref=hp&from=homepage.about_etsy" target="_blank">Read all about it</a> ></p>
                    </div>
                    <div className="col-5">
                        <img src="https://www.etsy.com/assets/dist/images/homepage/vesta/about_etsy_wide_right.20170228151449.png" />
                    </div>
                </div>
            )
        }
    }

    render(){
        return (
            <div className="container orange-bar">
                {this.chooseBar()}
            </div>
        )
    }
}
