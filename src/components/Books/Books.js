import React from "react";
import { Container, Row, Col } from "reactstrap";
import Book from "./Book/Book";
import classes from "./Books.module.css";

const Books = props => {
  let booksCards = props.books.map(book => {
    return (
      <Col key={book.id} sm="3" className={classes.Card_Wrapper}>
        {<Book item={book} />}
      </Col>
    );
  });
  return (
    <Container>
      <Row>{booksCards}</Row>
    </Container>
  );
};

export default Books;
