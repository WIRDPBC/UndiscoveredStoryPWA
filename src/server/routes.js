import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {App} from '../components/App';
import {Main} from '../components/Main';

function routeUsers(s, cb) {
	System.import('../components/Users').then(component => {
		cb(null, component.default || component);
	});
}

function routeContact(s, cb) {
	System.import('../components/Contact').then(component => {
		cb(null, component.default || component);
	});
}


function Routes(props) {
	return (
		<div>
			<App>

			
			<Switch>

			{/* <Route path="/" component={App}> */}
				<Route exact path="/" render={routerProps => (
					<Main/>
				)
				} />
				<Route path="users" getComponent={routeUsers} />
				<Route path="users/:id" getComponent={routeUsers} />
				<Route path="contact" getComponent={routeContact} />
			{/* </Route> */}
			</Switch>
			</App>
		</div>

	)
}

export default Routes

