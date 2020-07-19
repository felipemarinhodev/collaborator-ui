import React, { useState } from 'react';

import { Container, Attribute } from './styles';

function Attributes() {
	const [nameSelected, setNameSelected] = useState(false);
	const [roleSelected, setRoleSelected] = useState(false);
	const [teamSelected, setTeamSelected] = useState(false);
	const [competationSelected, setCompetationSelected] = useState(false);

	return (
		<Container>
			<Attribute
				selected={nameSelected}
				onClick={() => {setNameSelected(!nameSelected)}}
				>
				Nome
			</Attribute>
			<Attribute
				selected={roleSelected}
				onClick={() => {setRoleSelected(!roleSelected)}}
				>
				Cargo
			</Attribute>
			<Attribute
				selected={competationSelected}
				onClick={() => {setCompetationSelected(!competationSelected)}}
				>
				Competência
			</Attribute>
			<Attribute
				selected={teamSelected}
				onClick={() => {setTeamSelected(!teamSelected)}}
			>
				Time
			</Attribute>
		</Container>
	);
}

export default Attributes;