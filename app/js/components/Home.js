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
						<p>Need a tow? Give us a call: 555-555-0164</p>
						<RouteLink to='services' className='homeButton btn btn-success' role='button'>Our Services</RouteLink>
					</div>
				</div>
			</section>
		)
	}
})
