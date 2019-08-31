import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  HomePage,
  NotFoundPage,
  CampaignPage,
  CampaignDetailPage,
  BrandPage,
  BrandDetailPage
} from "pages";

const App = () => {
  return (
    <Switch>
      <Route exact path="/today" component={BrandPage} />
      <Route exact path="/campaign" component={CampaignPage} />
      <Route path="/campaign/:id" component={CampaignDetailPage} />
      <Route exact path="/brand" component={BrandPage} />
      <Route exact path="/brand/:id" component={BrandDetailPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default App;
