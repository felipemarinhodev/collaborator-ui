import React from 'react';

import { Container } from './styles';
import Avatar from '../Avatar';
import InfoCollaborator from '../InfoCollaborator';

function Card({collaborator}) {

	return (
		<Container>
			<Avatar  />
			<InfoCollaborator collaborator={collaborator} />
		</Container>
	);
}

export default Card;