import booksData from "../mock/books.json";

export function books(state = booksData, action) {
  switch (action.type) {
    default:
      return state;
  }
}
