
# Project 6: My Reads: A Book Tracking App

# Table of Contents

-   [Description](#description)
-   [Installation](#installation)
-   [Dependencies](#dependencies)
-   [Directory Structure](#directory-structure)
-   [Features](#features)
-   [Contributions](#contributions)
-   [License](#license)

## Description

The application is a simple book management app that allows a user to select and categorize books that user has read, is currently reading, or want to read on a bookshelf. Built on React, React-Router and a custom API server. The server is used for book search from where one can search books and add them to one's bookshelf. Since the server uses a fixed set of cached results it thereby limits a user to a particular set of search terms only.

The project follows the guidelines of [Udacity Project Rubric](https://review.udacity.com/#!/rubrics/918/view)

## Installation

-   Either clone the repository locally to your machine or simply download the project as a zip file.
-   Once downloaded, navigate to the directory of the project and run these two commands:
    *  npm install
    *  npm start
-  A new window opens in the browser displaying the app. If it doesn't, navigate to [http://localhost:3000/](http://localhost:3000/) in your browser

## Dependencies

To run the project, the following applications are used:
- [npm](https://www.npmjs.com/)
- [Node](https://nodejs.org/en/)

## Directory Structure

```bash
├── CONTRIBUTING.md
├── README.md # this file
├── SEARCH_TERMS.md # collection of available search terms to be used with the app
├── package.json # npm package manager file
├── public
│   ├── favicon.ico # React icon
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # file that styles app
    ├── App.js # the root file, contains static HTML
    ├── App.test.js # used for testing, testing is encouraged, but not required
    ├── BooksAPI.js # a JavaScript API for the provided Udacity backend
    ├── icons # images used in the app
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # global styles
    ├── index.js # only used for DOM rendering
    ├── utils
    │   └── BooksAPI.js # utility functions to perform necessary operations on the backend
    └── components
        └── mainPage
        │   ├── Header.js # component for display of the header of the main page
        │   ├── MainPage.js # component for display of multiple Bookshelf components
        ├── SearchButton.js # component for search field
        ├── Shelf.js # component for display of a specific collection of books
        │   └── Shelves.js # component for display of multiple Bookshelf components
        └── searchPage
        │    └── SearchPage.js # component for the display of search entry and results
        ├── Book.js # component for book display in Search and Main page
        └── Bookshelf.js # component for display of a specific collection of books
```

## Features

-   The main page displays three "shelves" in the bookshelf, each of which contains a number of books. The shelves sort books into three categories:
    -   Currently Reading
    -   Want to Read
    -   Read
-   Each book has a control that allows a user to move book between the shelves. When one selects a different shelf the book changes shelf from the current to the selected shelf.

-   When a book is on a shelf, it shows the same state on both the main page and the search page i.e. if a book is on a shelf, it is reflected in both pages.

-   The main page has a link to the search page (`/search`) and when clicked the search page is displayed, where a user can search for books and add them to one of the shelves or remove them from the bookshelf.

-   On search page user can search books by entering the query based on title or author in the search box. The search page instantly displays the books that match the query.

-   The search page also has a link to the main page (`/`), which navigates back to the main page. When one navigates back to the main page from the search page, one instantly see all the selected books in their respective shelves as one has chosen on the search page.

## Contributions

I hereby confirm that this submission is my work; there are no other contributors as per Udacity guidelines for this project. Neither did I copied nor pasted any code.

## License

This project is licensed under the Creative Commons Licensing. Any user is free to:

-   Share - copy and redistribute the material in any medium or format
-   Adapt - remix, transform and build upon the material for any purpose, even commercially.
