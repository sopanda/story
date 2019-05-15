import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import { layout as Layout } from "./hoc/Layout/Layout";
import BookDetails from "./pages/BookDetails/BookDetails";

const App = () => {
  return (
    <Fragment>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/book/:id" component={BookDetails} />
        </Switch>
      </Layout>
    </Fragment>
  );
};

export default App;
