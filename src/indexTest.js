//import React
import React from "react";
import ReactDOM from "react-dom";

//import Styles
import "";

//import React Router
import { BrowserRouter, Route, Switch } from "react-router-dom";

//import Components
import Home from "";
import ProductPage from "";
import TrendingPage from "";
import CategoryPage from "";

import BaseLayout from "";

//import IDK
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route path="/Products" component={} />
        <Route path="/Trending" component={} />
        <Route path="/Category" component={} />
        <Route path="/" component={Home} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>,
  document.getElementById("root")
);

registerServiceWorker();
