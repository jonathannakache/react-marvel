import React, { Component } from 'react';
import './App.css';
import About from './About.js';
import Heroes from './Heroes.js';
import Contact from './Contact.js';
import { Route, Switch, NavLink } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<nav className='App-nav'>
					<NavLink exact activeClassName='active-link' className='App-nav-link' to='/'>
						About
					</NavLink>
					<NavLink exact activeClassName='active-link' className='App-nav-link' to='/heroes'>
						Heroes
					</NavLink>
					<NavLink exact activeClassName='active-link' className='App-nav-link' to='/contact'>
						Contact
					</NavLink>
				</nav>
				<Switch>
					<Route exact path='/' component={About} />
					<Route exact path='/contact' component={Contact} />
					<Route exact path='/heroes' component={Heroes} />
				</Switch>
			</div>
		);
	}
}

export default App;
