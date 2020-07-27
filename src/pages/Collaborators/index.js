import React, { useEffect, useState } from 'react';

import Card from '../../components/Card';

import { Container, List, ButtonMore } from './styles';

import Filter from './Filter';
import { fetchCollaborators } from '../../services/collaborators';

function Collaborators() {
	const [collaborators, setCollaborators] = useState([]);

	const init = async () => {
		await fetchCollaborators()
		.then((res) => {
			setCollaborators(res.data.content);
		})
		.catch(err => {
			console.log('Error', err);
		})

	}
	useEffect(() => {
		init();
	}, []);

	return (
		<Container>
			<Filter />
			<List>
				{collaborators && collaborators.map(collaborator => (
					<Card
						key={`collaborator${collaborator.id}`}
						collaborator={collaborator}
					/>
				))}
			</List>
			<ButtonMore>mais</ButtonMore>
		</Container>
	);
}

export default Collaborators;