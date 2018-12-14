import * as BooksAPI from "../../utils/BooksAPI";

import React, { Component } from "react";
import { Link } from "react-router-dom";

import Book from "../Book";

class SearchPage extends Component {
  state = {
    query: "",
    searchedBooks: []
  };

  updateState = query => {
    this.updateQuery(query);
    this.updateSearchedBooks(query);
  };

  updateQuery = query => {
    this.setState({ query });
  };

  updateSearchedBooks = query => {
    if (query) {
      BooksAPI.search(query).then(searchedBooks => {
        if ("error" in searchedBooks) this.setState({ searchedBooks: [] });
        else {
          for (let searchedBook of searchedBooks) {
            for (let bookOnShelf of this.props.books) {
              if (bookOnShelf.id === searchedBook.id)
                searchedBook.shelf = bookOnShelf.shelf;
            }
          }

          for (let searchedBook of searchedBooks)
            if (!("shelf" in searchedBook)) searchedBook.shelf = "none";

          this.setState({ searchedBooks });
        }
      });
    } else {
      this.setState({ searchedBooks: [] });
    }
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books">
          <div className="search-books-bar">
            <Link to="/" className="close-search">
              Close
            </Link>
            <div className="search-books-input-wrapper">
              {/*
                NOTES: The search from BooksAPI is limited to a particular set of search terms.
                You can find these search terms here:
                https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                However, remember that the BooksAPI.search method DOES search by title or author. So, 
                don't worry if you don't find a specific author or title. Every search is limited by 
                search terms.
              */}
              <input
                type="text"
                placeholder="Search by title or author"
                onChange={event => this.updateState(event.target.value)}
              />
            </div>
          </div>

          <div className="search-books-results">
            <ol className="books-grid">
              {this.state.searchedBooks.map(searchedBook => (
                <li key={searchedBook.id}>
                  <Book
                    book={searchedBook}
                    handleChange={this.props.handleChange}
                  />
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchPage;
