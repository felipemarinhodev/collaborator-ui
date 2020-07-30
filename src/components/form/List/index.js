import React from 'react';
import { FaPlusCircle } from 'react-icons/fa';

import { Container, InputContainer, ExperiencesContainer } from './styles';

function List(props) {
	const { children, handleAddMore } = props;

	return (
		<Container>
			<InputContainer>
				{children}
			</InputContainer>
			<FaPlusCircle size={30} onClick={() => handleAddMore()} />
		</Container>
	);
}

export default List;