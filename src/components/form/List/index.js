import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';

import { Container, InputContainer, ExperiencesContainer } from './styles';
import { TextArea } from '..';
import Skills from '../Skills';

function List() {

	const [experiences, setExperiences] = useState([{experience: '', skills: []}]);

	const handleAddExperience = () => {
		setExperiences(experiences => [...experiences, {experience: '', skills: []}])
	}

	return (
		<Container>
			<InputContainer>
				{experiences.map((experience, i) => (
					<ExperiencesContainer>
						<TextArea key={`experiencie-${i}`} label="Experiência Profissionais:" />
						<Skills label="Compentências" />
					</ExperiencesContainer>
				))}
			</InputContainer>
			<FaPlusCircle size={30} onClick={() => handleAddExperience()} />
		</Container>
	);
}

export default List;