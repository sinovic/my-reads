import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Book } from './HomePage';
import getAll from '../data';

class SearchPage extends Component {
	state = {
		books: getAll,
	};

	render() {
		return (
			<div className='search-books'>
				<div className='search-books-bar'>
					<CloseSearch CloseSearch={this.props.CloseSearch} />
					<SearchBook />
				</div>
				<SearchResults books={this.state.books} />
			</div>
		);
	}
}

const CloseSearch = () => {
	return (
		<Link to='/'>
			<button type='button' className='close-search'>
				Close
			</button>
		</Link>
	);
};

const SearchBook = () => {
	return (
		<div className='search-books-input-wrapper'>
			<input type='text' value='' placeholder='Search by title or author' />
		</div>
	);
};

const SearchResults = props => {
	return (
		<div className='search-books-results'>
			<ol className='books-grid'>
				{props.books.map(book => (
					<Book key={book.id} book={book} bookShelf='none' />
				))}
			</ol>
		</div>
	);
};

export default SearchPage;
