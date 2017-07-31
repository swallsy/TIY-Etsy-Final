import React, { Component } from "react";

import Header from "";
import Footer from "";

class BaseLayout extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

export default BaseLayout;
