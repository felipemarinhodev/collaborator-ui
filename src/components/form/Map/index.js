import React from 'react';
import { IoMdPin } from 'react-icons/io';

import { Container, InputContainer } from './styles';
import Input from '../Input';

function Map() {
	return (
		<Container>
			<InputContainer>
				<IoMdPin size={30} />
				<Input placeholder="Informe seu endereço" />
			</InputContainer>
		</Container>
	);
}

export default Map;