import React, { Fragment, memo } from "react";
import Books from "../../components/Books/Books";
import { useSelector } from "react-redux";

const Home = memo(props => {
  let books = useSelector(state => state.books);
  return (
    <Fragment>
      <Books books={books} />
    </Fragment>
  );
});

export default Home;
