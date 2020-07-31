import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Card from '../../components/Card';

import { Container, List, ButtonMore } from './styles';

import Filter from './Filter';
import { fetchCollaborators } from '../../services/collaborators';

function Collaborators() {
	const LIMIT = 6;
	const [page, setPage] = useState(0);
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
					<Link 
						to={`/collaborator/${collaborator.id}`}
						key={`collaborator${collaborator.id}`}
						>
						<Card collaborator={collaborator} />
					</Link>
				))}
			</List>
			<ButtonMore>mais</ButtonMore>
		</Container>
	);
}

export default Collaborators;