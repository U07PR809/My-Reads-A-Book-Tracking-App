import * as BooksAPI from "./utils/BooksAPI";

import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import MainPage from "./components/mainPage/MainPage";
import SearchPage from "./components/searchPage/SearchPage";

import "./App.css";

class BooksApp extends Component {
	state = {
		books: []
	};

	componentDidMount() {
		BooksAPI.getAll().then(books => this.setState({ books }));
	}

	changeShelf = (book, shelf) => {
		BooksAPI.update(book, shelf).then(() =>
			BooksAPI.getAll().then(books => this.setState({ books }))
		);
	};

	render() {
		return (
			<div className="app">
				<Switch>
					<Route
						path="/search"
						render={props => (
							<SearchPage
								handleChange={this.changeShelf}
								books={this.state.books}
								{...props}
							/>
						)}
					/>
					<Route
						path="/"
						render={props => (
							<MainPage
								books={this.state.books}
								handleChange={this.changeShelf}
								{...props}
							/>
						)}
					/>
				</Switch>
			</div>
		);
	}
}

export default BooksApp;
