import React, { Fragment, memo } from "react";
import Book from "../../components/Books/Book/Book";
import { useSelector } from "react-redux";

const BookDetails = memo(props => {
    const id = props.match.params.id;
    let book = useSelector(state => state.books.find(book =>
        book.id == id
    ));
    return (
        <Fragment>
            <Book item={book} full={true} />
        </Fragment>
    );
});

export default BookDetails;
