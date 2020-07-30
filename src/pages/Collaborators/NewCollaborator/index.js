import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { TiLightbulb } from 'react-icons/ti';

import { Form, Info, Label, InputsContainer } from './styles';

import {
	Map,
	List,
	Input,
	Select,
	Button,
	TextArea,
} from '../../../components/form'
import Avatar from '../../../components/Avatar';

import NewCollaboratorContext from './context';
import { saveCollaborator } from '../../../services/collaborators';
import history from '../../../services/history';
import Contact from './Contact';

function NewCollaborator() {
	const NEW_EXPERIENCE = { description: '', skills: '' }
	const NEW_CONTACT = { value: '', type: '' }
	const [collaborator, setCollaborator] = useState(
		{
			experiences: [NEW_EXPERIENCE],
			contacts: [NEW_CONTACT]
		}
	);

	const handleChange = (data) => {
		setCollaborator(collaborator => ({ ...collaborator, ...data }));
	};

	const handleExperience = (data, index) => {
		const experiences = collaborator.experiences;
		const newExperience = {...experiences[index], ...data};
		experiences[index] = newExperience;
		setCollaborator(collaborator => ({...collaborator, experiences }));
	};

	const handleContact = (data, index) => {
		const contacts = collaborator.contacts;
		const newContact = {...data};
		contacts[index] = newContact;
		setCollaborator(collaborator => ({...collaborator, contacts }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log('handleSubmit', collaborator);
		await saveCollaborator(collaborator)
			.then(res => {
				console.log('Resposta', res);
				history.go('/collaborators');
		});
	};

	const handleAddMoreExperience = () => {
		setCollaborator(collaborator => (
			{
				...collaborator,
				experiences: [
					...collaborator.experiences,
					NEW_EXPERIENCE 
				]
			}
		))
	}

	const handleAddMoreContact = () => {
		console.log('Contacts', collaborator.contacts, typeof collaborator.contacts);
		console.log('experiences', collaborator.experiences, typeof collaborator.experiences);
		setCollaborator(collaborator => (
			{
				...collaborator,
				contacts: [
					...collaborator.contacts,
					NEW_CONTACT 
				]
			}
		))
	}

	const handleRemoveContact = (index) => {
		console.log('Collaborator', collaborator, index);
		// const contacts = [...collaborator.contacts];
		// const list = Object.values(contacts);
	}

	return (
		<NewCollaboratorContext.Provider value={
			{
				handleChange,
				handleContact,
				handleRemoveContact,
			}
		}>
			<Form onSubmit={handleSubmit}>
				<div>
					<Button type="submit">
						<FaCheck size={20} />
						Salvar
					</Button>
				</div>
				<Info>
					<Avatar size={120} />
					<InputsContainer>
						<Input
							placeholder="Nome"
							onChange={(e) => handleChange({ name: e.target.value })}
						/>
						<div>
							<Select
								onChange={(e) => handleChange({ role: e.target.value })}
							>
								<option value="">Selecione</option>
								<option value="DESENVOLVEDOR">Desenvolvedor</option>
								<option value="ARQUITETURA_SOLUCAO">Arquiteto de solução</option>
								<option value="ANALISTA_JUNIOR">Analista junior</option>
								<option value="ANALISTA_PLENO">Analista pleno</option>
								<option value="ANALISTA_SENIOR">Analista sênior</option>
							</Select>
						</div>
						<div>
							<TiLightbulb size={20} />
							<Select
								id="select-team"
								onChange={(e) => handleChange({ team: e.target.value })}
							>
								<option value="">Selecione</option>
								<option value="CHAPTER_FRONT_END">Chapter Front-end</option>
								<option value="CHAPTER_BACK_END">Chapter Back-end</option>
								<option value="CHAPTER_ARQUITETURA">Chapter Arquitetura</option>
								<option value="SQUAD_ORCAMENTO">Squad orçamento</option>
							</Select>
						</div>
					</InputsContainer>
				</Info>
				<List handleAddMore={handleAddMoreExperience}>
					{collaborator.experiences.map((experience, i) => (
						<div key={`experience-${i}`}>
							<TextArea
								label="Experiência Profissionais:"
								value={experience.description}
								onChange={(e) => handleExperience({description: e.target.value}, i)}
							/>
							<TextArea
								label="Competências:"
								value={experience.skill}
								onChange={(e) => handleExperience({skills: e.target.value}, i)}
							/>
						</div>
					))}
				</List>
				<List handleAddMore={handleAddMoreContact}>
					<Label>Contato</Label>
					{collaborator.contacts.map((contact, i) => (
						<Contact
							key={`contact-${i}`}
							index={i}
							contact={contact} 
						/>
					))}
				</List>
				<Map />
			</Form>
		</NewCollaboratorContext.Provider>
	);
}

export default NewCollaborator;