import React, { Fragment, memo } from "react";
import BookInfo from "../../components/Books/Book/BookInfo/BookInfo";
import { useSelector } from "react-redux";

const BookDetails = memo(props => {
    const id = props.match.params.id;
    let book = useSelector(state => state.books.find(book =>
        book.id == id
    ));
    return (
        <Fragment>
            <BookInfo item={book} full={true} />
        </Fragment>
    );
});

export default BookDetails;
