import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Card from '../../components/Card';

import { Container, List, ButtonMore } from './styles';

import Filter from './Filter';
import { fetchCollaborators } from '../../services/collaborators';

function Collaborators() {
	const [page, setPage] = useState(0);
	const [totalPage, setTotalPage] = useState(0);
	const [collaborators, setCollaborators] = useState([]);
	const [disabledMoreButton, setDisabledMoreButton] = useState(true);

	const init = async () => {
		await fetchCollaborators()
		.then((res) => {
			setCollaborators(res.data.content);
			setTotalPage(res.data.totalPages);
		})
		.catch(err => {
			console.log('Error', err);
		})
	}
	
	const getCollaborators = async () => {
		await fetchCollaborators(page)
		.then((res) => {
			setTotalPage(res.data.totalPages);
			setCollaborators(items => [...items,...res.data.content]);
		})
		.catch(err => {
			console.log('Error', err);
		})
	}
	
	useEffect(() => {
		getCollaborators();
	}, [page]);


	useEffect(() => {
		init();
	}, []);

	const handleMore = () => {
		setPage(page => page + 1);
	};

	useEffect(() => {
		console.log('DisabledMoreButton page', page, 'totalPage', totalPage);
		setDisabledMoreButton((page + 1) >= totalPage);
	} , [totalPage, page]);

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
			<ButtonMore
				disabled={disabledMoreButton}
				onClick={() => handleMore()}
			>
				Mais
			</ButtonMore>
		</Container>
	);
}

export default Collaborators;