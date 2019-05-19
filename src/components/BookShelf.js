import React, { Component } from 'react';
import Book from './Book';

class BookShelf extends Component {
	render() {
		return (
			<div className='bookshelf'>
				<h2 className='bookshelf-title'>{this.props.bookShelfTitle}</h2>
				<div className='bookshelf-books'>
					<ol className='books-grid'>
						<Book />
						<Book />
						<Book />
						<Book />
					</ol>
				</div>
			</div>
		);
	}
}

export default BookShelf;
