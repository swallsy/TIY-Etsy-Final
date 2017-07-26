import React, { Component } from 'react';
import "../../styles/FreshBlog.css";

class FreshBlog extends Component {
  render() {
    return (
      <div>
      <h2 className="blogtitle">Fresh From The Blog</h2>
      <div className="row wholeblog">
        <div className="col-sm-4">
          <div className="card blogcard">
            <div className="card-block">
              <a href="https://blog.etsy.com/en/featured-shop-emma-claire/?ref=hp" alt="featured shop by emma claire. Blog Post.">
                <img className="card-img-top blogimg" src={require("./images/etsypic1.jpg")} alt="Card image cap"/>
                <h5 className="card-text">Featured Shops</h5>
                <h4 className="card-title">Featured Shop: Emma Claire</h4>
                <p className="card-text">
                  Bring the outdoors in with botanical home accessories from these green-thumbed friends and co-founders.
                </p>
            </a>
          </div>
          </div>
        </div>


        <div className="col-md-4">
          <div className="card blogcard">
            <div className="card-block">
              <a href="https://blog.etsy.com/en/are-you-pro-pineapple-or-team-watermelon/?ref=hp" alt="Shopping guides, are you pro pineapple or watermelon">
                <img className="card-img-top blogimg" src={require("./images/etsypic2.jpg")} alt="Card image cap"/>
                <h5 className="card-text">Shopping Guides</h5>
                <h4 className="card-title">Are You Pro-Pineapple or Team Watermelon?</h4>
                <p className="card-text">
                  Discover what your favorite trending fruit motif says about you.
                </p>
            </a>
          </div>
          </div>
        </div>


        <div className="col-md-4">
          <div className="card blogcard">
            <div className="card-block">
              <a href="https://blog.etsy.com/en/the-ultimate-diy-birthday-party-playbook/?ref=hp" alt="Inspiration, the ultimate diy birthday party playbook.">
                <img className="card-img-top blogimg" src={require("./images/etsypic3.jpg")} alt="Card image cap"/>
                <h5 className="card-text">Inspiration</h5>
                <h4 className="card-title">The Ultimate DIYBirthday Party Playbook</h4>
                <p className="card-text">
                  Mix and match your favorite handmade ideas—from a sweet (and easy) dessert station to favors guests will treasure—for a more personalized party.
                </p>
            </a>
          </div>
          </div>
        </div>
      </div>
      <div className="bottomlinktoblog"><a href="https://blog.etsy.com/en?ref=hpsm">Read the blog</a></div>
    </div>
    );
  }

}
export default FreshBlog;
