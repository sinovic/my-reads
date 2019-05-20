import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import getAll from '../data';

class HomePage extends Component {
	render() {
		return (
			<div className='list-books'>
				<div className='list-books-title'>
					<h1>MyReads</h1>
				</div>
				<BookList />
				<OpenSearch />
			</div>
		);
	}
}

class BookList extends Component {
	state = {
		books: getAll,
	};

	bookShelfs = [
		{ key: 'currentlyReading', title: 'Currently Reading' },
		{ key: 'wantToRead', title: 'Want to Read' },
		{ key: 'read', title: 'Have Read' },
	];

	render() {
		return (
			<div className='list-books-content'>
				<div>
					{this.bookShelfs.map(bookShelf => (
						<BookShelf
							key={bookShelf.key}
							bookShelf={bookShelf}
							books={this.state.books}
						/>
					))}
				</div>
			</div>
		);
	}
}

const BookShelf = props => {
	const { title, key } = props.bookShelf;
	return (
		<div className='bookshelf'>
			<h2 className='bookshelf-title'>{title}</h2>
			<div className='bookshelf-books'>
				<ol className='books-grid'>
					{props.books
						.filter(book => key === book.shelf)
						.map(book => (
							<Book key={book.id} book={book} bookShelf={props.bookShelf} />
						))}
				</ol>
			</div>
		</div>
	);
};

const Book = props => {
	const { book, bookShelf } = props;
	return (
		<li>
			<div className='book'>
				<div className='book-top'>
					<div
						className='book-cover'
						style={{
							width: 128,
							height: 193,
							backgroundImage: `url("${book.imageLinks.thumbnail}")`,
						}}
					/>
					<BookShelfChanger bookShelf={bookShelf} />
				</div>
				<div className='book-title'>{book.title}</div>
				<div className='book-authors'>{book.authors.join(', ')}</div>
			</div>
		</li>
	);
};

const BookShelfChanger = props => {
	return (
		<div className='book-shelf-changer'>
			<select value={props.bookShelf.key}>
				<option value='move' disabled>
					Move to...
				</option>
				<option value='currentlyReading'>Currently Reading</option>
				<option value='wantToRead'>Want to Read</option>
				<option value='read'>Read</option>
				<option value='none'>None</option>
			</select>
		</div>
	);
};

const OpenSearch = () => {
	return (
		<div className='open-search'>
			<Link to='search'>
				<button type='button'>Add a book</button>
			</Link>
		</div>
	);
};

export { HomePage, Book };
