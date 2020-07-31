import React, { useEffect, useState, useMemo } from 'react';
import { FaArrowLeft, FaPencilAlt, FaTrashAlt } from 'react-icons/fa';

import {
	Line,
	Skill,
	Container,
	Experience,
	InfoContainer,
	OptionsContainer,
	ExperiencesContainer,
} from './styles';
import { fetchCollaborator } from '../../services/collaborators';
import history from '../../services/history';
import Avatar from '../../components/Avatar';
import InfoCollaborator from '../../components/InfoCollaborator';

function Collaborator({ match }) {
	const {id} = match.params;
	const [collaborator, setCollaborator] = useState({});

	const init = async () => {
		try {
			await fetchCollaborator(id)
				.then(res => {
					console.log('Collaborator', res.data);
					setCollaborator(res.data);
				})
				.catch(err => {
					throw new Error();
				})
		} catch (error) {
			history.push('/collaborators');
			alert('Aconteceu um erro ao recuperar o Colaborador.');
		}
	}

	useEffect(() => {
		init();
	}, []);

	return (
		<Container>
			<OptionsContainer>
				<FaArrowLeft size={20} color="#000" onClick={() => history.back()} />
				<FaPencilAlt size={20} color="#000" onClick={() => history.go(`/collaborator/${collaborator.id}/edit`)}/>
				<FaTrashAlt size={20} color="#000" />
			</OptionsContainer>
			<InfoContainer>
				<Avatar />
				<InfoCollaborator collaborator={collaborator} />
			</InfoContainer>
			<Line />
			<strong>Experiências Profissionais</strong>
			<ExperiencesContainer>
				{collaborator.experiences && 
					collaborator.experiences.map(experience => (
					<Experience>
						<span>{experience.description}</span>
					</Experience>
					))}
			</ExperiencesContainer>
			{/* <Line /> */}
			{/* {skills.map(skill => (
				<Skill>{skill}</Skill>
			))} */}
			{/* <ContactContainer>
				<strong></strong>
			</ContactContainer>
			<LocalContainer>
				<strong></strong>
			</LocalContainer> */}
		</Container>
	);
}

export default Collaborator;