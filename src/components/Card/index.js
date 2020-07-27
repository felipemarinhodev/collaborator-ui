import React from 'react';

import { TiLightbulb } from 'react-icons/ti';

import { Container, Info } from './styles';
import Avatar from '../Avatar';
import history from '../../services/history';

function Card({collaborator}) {

	const handleDetailCollaborator = () => {
		history.go(`/collaborator/${collaborator.id}`);
	};

	return (
		<Container onClick={handleDetailCollaborator}>
			<Avatar  />
			<Info>
				<strong>{collaborator.name}</strong>
				<small>{collaborator.role}</small>
				<div>
					<TiLightbulb size={20} />
					<small>{collaborator.team}</small>
				</div>
			</Info>
		</Container>
	);
}

export default Card;