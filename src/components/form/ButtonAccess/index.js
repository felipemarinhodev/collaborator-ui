import React from 'react';

import { Container } from './styles';

function ButtonAccess(props) {
	const {children} = props;
	return (
		<Container {...props}>
			{children}
		</Container>
	)	;
}

export default ButtonAccess;