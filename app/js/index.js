import React from 'react';
import ReactDOM from 'react-dom';
import {Router, hashHistory} from 'react-router';
import routes from './components/routes';
import style from '../sass/main.sass';

ReactDOM.render(
	<Router
		routes={routes}
		history={hashHistory}/>, document.getElementById('app'));
