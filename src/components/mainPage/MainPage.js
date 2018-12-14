import React from "react";

import Header from "./Header";
import Shelves from "./Shelves";
import SearchButton from "./SearchButton";

const MainPage = props => {
	return (
		<div className="list-books">
			<Header />
			<Shelves books={props.books} handleChange={props.handleChange} />
			<SearchButton />
		</div>
	);
};

export default MainPage;
