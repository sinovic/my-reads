import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Book } from './HomePage';

class SearchPage extends Component {
	render() {
		return (
			<div className='search-books'>
				<div className='search-books-bar'>
					<CloseSearch onClose={this.props.onClose} />
					<SearchBook onSearch={this.props.onSearch} />
				</div>
				<SearchResults
					searchedBooks={this.props.searchedBooks}
					onMove={this.props.onMove}
				/>
			</div>
		);
	}
}

const CloseSearch = props => {
	return (
		<Link to='/'>
			<button type='button' className='close-search' onClick={props.onClose}>
				Close
			</button>
		</Link>
	);
};

class SearchBook extends Component {
	state = {
		value: '',
	};

	handleOnSearch = e => {
		const { value } = e.target;
		this.setState({ value }, () => this.props.onSearch(value));
	};

	render() {
		return (
			<div className='search-books-input-wrapper'>
				<input
					type='text'
					value={this.state.value}
					placeholder='Search by title or author'
					onChange={this.handleOnSearch}
				/>
			</div>
		);
	}
}

const SearchResults = props => {
	return (
		<div className='search-books-results'>
			<ol className='books-grid'>
				{props.searchedBooks.map(book => (
					<Book
						key={book.id}
						book={book}
						onMove={props.onMove}
						bookShelf={book.shelf ? book.shelf : 'none'}
					/>
				))}
			</ol>
		</div>
	);
};

export default SearchPage;
