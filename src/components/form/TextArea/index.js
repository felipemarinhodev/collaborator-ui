import React from 'react';

import { Container } from './styles';

function TextArea({label}) {
	return (
		<Container>
			<label>{label}</label>
			<textarea />
		</Container>
	);
}

export default TextArea;