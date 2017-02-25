import React from 'react';
import RouteLink from './RouteLink';

export default React.createClass({
	render() {
		return (
			<section id='home'>
				<div className='mainHeader jumbotron'>
					<div className='container'>
						<h1 className='title'>Echo Towing</h1>
						<p className='lead'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						<RouteLink to='about' className='btn btn-success homeButton' role='button'>Learn More</RouteLink>
					</div>
				</div>
			</section>
		)
	}
})
