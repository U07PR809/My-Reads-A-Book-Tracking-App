import React from "react";

import Book from "../Book";

const Shelf = props => {
  return (
    <div className="list-books-content">
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{props.title}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {props.books.map(book => (
                <li key={book.id}>
                  <Book book={book} handleChange={props.handleChange} />
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shelf;
