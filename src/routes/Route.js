import React from 'react';

import { Route, Redirect } from 'react-router-dom';
import DefaultLayout from '../pages/_layout/default';
import AuthLayout from '../pages/_layout/auth';

// import { Container } from './styles';

function RouteWrapper({
	component: Component,
	isPrivate,
	...rest
}) {

	const token = sessionStorage.getItem('token');

	if (!token && isPrivate) {
		return <Redirect to="/" />
	}
	
	if (token && !isPrivate) {
		return <Redirect to="/collaborators" />
	}

	const Layout = token ? DefaultLayout : AuthLayout;

	return (
		<Route
			{...rest}
			render={props => (
				<Layout>
					<Component {...props} />
				</Layout>
			)}
		/>
	);
}

export default RouteWrapper;