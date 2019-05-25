import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component {
	render() {
		return (
			<div className='list-books'>
				<div className='list-books-title'>
					<h1>MyReads</h1>
				</div>
				<BookList
					bookShelfs={this.props.bookShelfs}
					books={this.props.books}
					onMove={this.props.onMove}
				/>
				<OpenSearch />
			</div>
		);
	}
}

class BookList extends Component {
	render() {
		return (
			<div className='list-books-content'>
				<div>
					{this.props.bookShelfs.map(bookShelf => (
						<BookShelf
							key={bookShelf.key}
							bookShelf={bookShelf}
							books={this.props.books}
							onMove={this.props.onMove}
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
							<Book
								key={book.id}
								book={book}
								bookShelf={props.bookShelf.key}
								onMove={props.onMove}
							/>
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
							backgroundImage: `url("${book.imageLinks &&
								book.imageLinks.thumbnail}")`,
						}}
					/>
					<BookShelfChanger
						book={book}
						bookShelf={bookShelf}
						onMove={props.onMove}
					/>
				</div>
				{console.log(book.authors)}
				<div className='book-title'>{book.title}</div>
				<div className='book-authors'>
					{book.authors && book.authors.join(', ')}
				</div>
			</div>
		</li>
	);
};

class BookShelfChanger extends Component {
	state = {
		shelf: this.props.bookShelf,
	};

	handleOnMove = e => {
		const { value: shelf } = e.target;
		this.setState({ shelf });
		return this.props.onMove(this.props.book, shelf);
	};

	render() {
		return (
			<div className='book-shelf-changer'>
				<select value={this.state.shelf} onChange={this.handleOnMove}>
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
	}
}

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
