import React from 'react';
// import * as BooksAPI from './BooksAPI'
import './App.css';
import { Route } from 'react-router-dom';
import SearchPage from './view/SearchPage';
import { HomePage } from './view/HomePage';

class BooksApp extends React.Component {
	render() {
		return (
			<div className='app'>
				<Route exact path='/' component={HomePage} />
				<Route path='/search' component={SearchPage} />
			</div>
		);
	}
}

export default BooksApp;
