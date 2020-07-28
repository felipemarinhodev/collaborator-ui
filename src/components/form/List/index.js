import React, { useState, useEffect } from 'react';
import { FaPlusCircle } from 'react-icons/fa';

import { Container, InputContainer, ExperiencesContainer } from './styles';
import { TextArea } from '..';
import Skills from '../Skills';


function List({ handleChange }) {
	const [experiences, setExperiences] = useState([{description: '', skills: []}]);

	const handleAddExperience = () => {
		setExperiences(experiences => [...experiences, {experience: '', skills: []}])
	}

	const handleDescription = (value, i) => {
		const experience = { ...experiences[i], description: value };
		setExperiences(experiences => {
			const aux = experiences;
			aux[i] = experience;
			return aux;
		})
	}

	useEffect(() => {
		handleChange({ experiences });
	}, [experiences]);

	return (
		<Container>
			<InputContainer>
				{experiences.map((experience, i) => (
					<ExperiencesContainer>
						<TextArea
							key={`experience-${i}`}
							label="Experiência Profissionais:"
							value={experience.description}
							onChange={(e) => handleDescription(e.target.value, i)}
						/>
						<Skills label="Compentências" />
					</ExperiencesContainer>
				))}
			</InputContainer>
			<FaPlusCircle size={30} onClick={() => handleAddExperience()} />
		</Container>
	);
}

export default List;