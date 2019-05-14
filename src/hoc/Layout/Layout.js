import React, { Fragment } from "react";
import Navigation from "../../components/Navigation/Navigation";
import { Container } from "reactstrap";
import classes from "./Layout.module.css";

export const layout = props => (
  <Fragment>
    <Navigation />
    <main className={classes.Main}>
      <Container>{props.children}</Container>
    </main>
  </Fragment>
);
