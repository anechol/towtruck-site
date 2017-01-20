import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Main from './Main';

const routes = (
	<Route path='/' component={Main}>
		{/* <IndexRoute component={Home}/> */}
		{/* <Route path='/about' component={About}/> */}
		{/* <Route path='/services' component={Services}/> */}
		{/* <Route path='/contact' component={Contact}/> */}
	</Route>
);

export default routes;
