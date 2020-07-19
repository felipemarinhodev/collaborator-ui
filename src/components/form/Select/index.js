import React from 'react';

import { Container } from './styles';

function Select(props ) {
	const {children} = props;
	return (
		<Container id="select-role" {...props}>
			{children}
		</Container>
	);
}

export default Select;