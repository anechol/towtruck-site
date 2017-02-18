import React from 'react';
import RouteLink from './RouteLink';
import home from '../styles/homeStyle';

export default React.createClass({
	render() {
		return (
			<section>
				<div className='jumbotron' style={home.jumbotron}>
					<div className='container'>
						<h1 style={home.title}>Echo Towing</h1>
						<p className='lead'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						<RouteLink to='about' className='btn btn-success' role='button'>Learn More</RouteLink>
					</div>
				</div>
			</section>
		)
	}
})
