import React from 'react';
import { FaUser } from 'react-icons/fa';
import { Container } from './styles';

function Avatar({size=40}) {
	return (
		<Container>
			<FaUser size={size} />
		</Container>
	);
}

export default Avatar;