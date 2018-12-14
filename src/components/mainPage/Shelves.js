import React, { Component } from "react";

import Shelf from "./Shelf";

class Shelves extends Component {
  render() {
    const books = this.props.books;

    const currentlyReadingBooks = books.filter(
      book => book.shelf === "currentlyReading"
    );
    const wantToReadBooks = books.filter(book => book.shelf === "wantToRead");
    const readBooks = books.filter(book => book.shelf === "read");

    return (
      <div>
        <Shelf
          books={currentlyReadingBooks}
          title={"Currently Reading"}
          handleChange={this.props.handleChange}
        />

        <Shelf
          books={wantToReadBooks}
          title={"Want to Read"}
          handleChange={this.props.handleChange}
        />

        <Shelf
          books={readBooks}
          title={"Read"}
          handleChange={this.props.handleChange}
        />
      </div>
    );
  }
}

export default Shelves;
