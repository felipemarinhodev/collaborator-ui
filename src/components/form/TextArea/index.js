import React from 'react';

import { Container } from './styles';

function TextArea(props) {
	const {label} = props;
	return (
		<Container>
			<label>{label}</label>
			<textarea {...props}/>
		</Container>
	);
}

export default TextArea;