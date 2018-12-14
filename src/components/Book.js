import React from "react";

import BookShelfChanger from "./BookShelfChanger";

const Book = props => {
  const { book } = props;
  const { imageLinks, title, authors } = book;

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: imageLinks
              ? `url( ${imageLinks.thumbnail} )`
              : `url()`
          }}
        />
        <BookShelfChanger book={book} handleChange={props.handleChange} />

        <div className="book-title">{title ? title : ""}</div>
        <div className="book-authors">{authors ? authors : ""}</div>
      </div>
    </div>
  );
};

export default Book;
