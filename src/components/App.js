import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  HomePage,
  NotFoundPage,
  CampaignPage,
  CampaignDetailPage,
  BrandPage,
  BrandDetailPage,
  PlaceholderPage
} from "pages";
import ProductPage from "pages/ProductPage";

const App = () => {
  return (
    <Switch>
      <Route exact path="/today" component={HomePage} />
      <Route exact path="/campaign" component={CampaignPage} />
      <Route path="/campaign/:id" component={CampaignDetailPage} />
      <Route exact path="/brand" component={BrandPage} />
      <Route exact path="/brand/:id" component={BrandDetailPage} />
      <Route exact path="/product" component={ProductPage} />
      <Route exact path="/placeholder" component={PlaceholderPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default App;
