import React, { Component } from 'react';
import { Book } from './HomePage';

class SearchPage extends Component {
	render() {
		return (
			<div className='search-books'>
				<div className='search-books-bar'>
					<CloseSearch CloseSearch={this.props.CloseSearch} />
					<SearchBook />
				</div>
				<SearchResults />
			</div>
		);
	}
}

const CloseSearch = props => {
	return (
		<button type='button' className='close-search' onClick={props.CloseSearch}>
			Close
		</button>
	);
};

const SearchBook = () => {
	return (
		<div className='search-books-input-wrapper'>
			<input type='text' value='' placeholder='Search by title or author' />
		</div>
	);
};

const SearchResults = () => {
	return (
		<div className='search-books-results'>
			<ol className='books-grid'>
				<Book />
				<Book />
				<Book />
				<Book />
				<Book />
				<Book />
				<Book />
				<Book />
			</ol>
		</div>
	);
};

export default SearchPage;
