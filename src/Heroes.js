import React, { Component } from 'react';
import './App.css';
import marvel from './assets/marvel.png';

class Heroes extends Component {
	render() {
		return (
			<div className='frame'>
				<img className='photo' src={marvel} alt='marvel' />
			</div>
		);
	}
}

export default Heroes;
