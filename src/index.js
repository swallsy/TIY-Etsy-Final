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
import TrendingPage from "./trending/components/App.js";
import CategoryPage from "./categories/components/App.js";

import BaseLayout from "./base_layout.js";

//import IDK
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route path="/Listing" component={Listing} />
        <Route path="/Trending" component={TrendingPage} />
        <Route path="/Category" component={CategoryPage} />
        <Route path="/" component={Home} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>,
  document.getElementById("root")
);

registerServiceWorker();
