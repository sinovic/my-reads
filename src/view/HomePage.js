import React, { Component } from 'react';

class HomePage extends Component {
	render() {
		return (
			<div className='list-books'>
				<div className='list-books-title'>
					<h1>MyReads</h1>
				</div>
				<BookList />
				<OpenSearch OpenSearchClick={this.props.OpenSearchClick} />
			</div>
		);
	}
}

const BookList = () => {
	return (
		<div className='list-books-content'>
			<div>
				<BookShelf bookShelfTitle='Currently Reading' />
				<BookShelf bookShelfTitle='Want to Read' />
				<BookShelf bookShelfTitle='Have Read' />
			</div>
		</div>
	);
};

const OpenSearch = props => {
	return (
		<div className='open-search'>
			<button type='button' onClick={props.OpenSearchClick}>
				Add a book
			</button>
		</div>
	);
};

const BookShelf = props => {
	return (
		<div className='bookshelf'>
			<h2 className='bookshelf-title'>{props.bookShelfTitle}</h2>
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
};

const Book = () => {
	return (
		<li>
			<div className='book'>
				<div className='book-top'>
					<div
						className='book-cover'
						style={{
							width: 128,
							height: 193,
							backgroundImage:
								'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")',
						}}
					/>
					<BookShelfChanger />
				</div>
				<div className='book-title'>To Kill a Mockingbird</div>
				<div className='book-authors'>Harper Lee</div>
			</div>
		</li>
	);
};

const BookShelfChanger = () => {
	return (
		<div className='book-shelf-changer'>
			<select>
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

export { HomePage, Book };
