import React from 'react';

import { TiLightbulb } from 'react-icons/ti';

import { Container } from './styles';

function InfoCollaborator({collaborator}) {
	return (
		<Container>
			<strong>{collaborator.name}</strong>
				<small>{collaborator.role}</small>
				<div>
					<TiLightbulb size={20} />
					<small>{collaborator.team}</small>
				</div>
		</Container>
	);
}

export default InfoCollaborator;