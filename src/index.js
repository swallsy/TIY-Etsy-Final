//import React
import React from "react";
import ReactDOM from "react-dom";

//import Styles
import "";

//import React Router
import { BrowserRouter, Route, Switch } from "react-router-dom";

//import Components
import Home from "./HomePage/components/Home/Home.js";
import Listing from "./Listing/components/Listing.js";
import TrendingPage from "";
import CategoryPage from "";

import BaseLayout from "./base_layout.js";

//import IDK
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route path="/Listing" component={Listing} />
        <Route path="/Trending" component={} />
        <Route path="/Category" component={} />
        <Route path="/" component={Home} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>,
  document.getElementById("root")
);

registerServiceWorker();
