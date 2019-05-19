import React, { Component } from 'react';
import BookShelf from './BookShelf';

class BookList extends Component {
	render() {
		return (
			<div className='list-books-content'>
				<div>
					<BookShelf bookShelfTitle='Currently Reading' />
					<BookShelf bookShelfTitle='Want to Read' />
					<BookShelf bookShelfTitle='Have Read' />
				</div>
			</div>
		);
	}
}

export default BookList;
