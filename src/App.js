import React from 'react';
// import * as BooksAPI from './BooksAPI'
import './App.css';
import SearchPage from './view/SearchPage';
import { HomePage } from './view/HomePage';

class BooksApp extends React.Component {
	state = {
		/**
		 * TODO: Instead of using this state variable to keep track of which page
		 * we're on, use the URL in the browser's address bar. This will ensure that
		 * users can use the browser's back and forward buttons to navigate between
		 * pages, as well as provide a good URL they can bookmark and share.
		 */
		showSearchPage: false,
	};

	handleCloseSearch = () => this.setState({ showSearchPage: false });

	handleOpenSearch = () => this.setState({ showSearchPage: true });

	render() {
		return (
			<div className='app'>
				{this.state.showSearchPage ? (
					<SearchPage CloseSearch={this.handleCloseSearch} />
				) : (
					<HomePage OpenSearchClick={this.handleOpenSearch} />
				)}
			</div>
		);
	}
}

export default BooksApp;
