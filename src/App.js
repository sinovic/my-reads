import React from 'react';
import { Route } from 'react-router-dom';
import { debounce } from 'throttle-debounce';
import * as BooksAPI from './BooksAPI';
import './App.css';
import SearchPage from './view/SearchPage';
import { HomePage } from './view/HomePage';

class BooksApp extends React.Component {
	state = {
		books: [],
		searchedBooks: [],
		error: false,
	};

	bookShelfs = [
		{ key: 'currentlyReading', title: 'Currently Reading' },
		{ key: 'wantToRead', title: 'Want to Read' },
		{ key: 'read', title: 'Have Read' },
	];

	handleSearchInput = debounce(300, false, query => {
		return query.length > 0
			? BooksAPI.search(query)
					.then(books => {
						return books.error
							? this.setState({ searchedBooks: [] })
							: this.setState({ searchedBooks: books });
					})
					.catch(err => {
						console.log(err);
						this.setState({ error: true });
					})
			: this.setState({ searchedBooks: [] });
	});

	componentDidMount() {
		BooksAPI.getAll()
			.then(books => this.setState({ books }))
			.catch(err => {
				console.log(err);
				this.setState({ error: true });
			});
	}

	resetSearchedBooks = () => {
		this.setState({ searchedBooks: [] });
	};

	handleOnMove = (book, shelf) => {
		BooksAPI.update(book, shelf)
			.then(shelfs => console.log(shelfs))
			.catch(err => {
				console.log(err);
				this.setState({ error: true });
			});
		// eslint-disable-next-line react/no-access-state-in-setstate
		let updatedBooks = this.state.books.filter(b => book.id !== b.id);

		if (shelf !== 'none') {
			const updatedBook = { ...book, shelf };
			updatedBooks = [...updatedBooks, updatedBook];
		}

		this.setState({ books: updatedBooks });
	};

	render() {
		return this.state.error ? (
			<div>Network error. Please try again later.</div>
		) : (
			<div className='app'>
				<Route
					exact
					path='/'
					render={() => (
						<HomePage
							bookShelfs={this.bookShelfs}
							books={this.state.books}
							onMove={this.handleOnMove}
						/>
					)}
				/>
				<Route
					path='/search'
					render={() => (
						<SearchPage
							onMove={this.handleOnMove}
							onSearch={this.handleSearchInput}
							searchedBooks={this.state.searchedBooks}
							onClose={this.resetSearchedBooks}
						/>
					)}
				/>
			</div>
		);
	}
}

export default BooksApp;
