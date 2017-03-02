import React from 'react';
import { Route, IndexRoute } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Main from './Main';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';


const routes = (
	<Route path='/' component={Main}>
		<IndexRoute component={Home}/>
		<Route path='about' component={About}/>
		<Route path='services' component={Services}/>
		<Route path='contact' component={Contact}/>
	</Route>
);

export default routes;
