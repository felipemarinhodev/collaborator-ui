import React from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';

import {
	Signin,
	Collaborator,
	Collaborators,
	NewCollaborator
} from '../pages';

import Route from './Route';

function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route
					exact
					path="/"
					component={Signin}
				/>	
				<Route
					exact
					isPrivate
					path="/collaborators"
					component={Collaborators}
				/>
				<Route
					exact
					isPrivate
					path="/collaborators/{:id}"
					component={Collaborator}
				/>
				<Route
					exact
					isPrivate
					path="/collaborator/{:id}"
					component={Collaborator}
				/>	
				<Route
					exact
					isPrivate
					path="/collaborator/new"
					component={NewCollaborator}
				/>	
			</Switch>
		</BrowserRouter>
	);
}

export default Routes;