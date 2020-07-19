import React from 'react';

import { Container } from './styles';

function Button(props) {
	const { children } = props;
	return (
		<Container {...props}>
			{children}
		</Container>
	);
}

export default Button;