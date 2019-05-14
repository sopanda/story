import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import { layout as Layout } from "./hoc/Layout/Layout";

const App = () => {
  return (
    <Fragment>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Layout>
    </Fragment>
  );
};

export default App;
