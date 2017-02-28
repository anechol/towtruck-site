import React from 'react';
import RouteLink from './RouteLink';

export default React.createClass({
	render() {
		return (
			<section id='home' className='d-flex justify-content-center align-items-center'>
				<div className='mainHeader jumbotron'>
					<div className='container'>
						<h1>Echo Towing</h1>
						<p className='lead'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						<RouteLink to='about' className='homeButton btn btn-success' role='button'>Learn More</RouteLink>
					</div>
				</div>
			</section>
		)
	}
})
