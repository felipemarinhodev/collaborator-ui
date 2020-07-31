import React, { useState, useEffect } from 'react';
import { FaCheck, FaArrowLeft } from 'react-icons/fa';
import { TiLightbulb } from 'react-icons/ti';

import {
	Map,
	Form,
	Info,
	Label,
	InputsContainer,
	HeaderContainer,
} from './styles';

import {
	List,
	Input,
	Select,
	Button,
	TextArea,
} from '../../../components/form'
import Avatar from '../../../components/Avatar';

import NewCollaboratorContext from './context';
import {
	saveCollaborator,
	fetchCollaborator,
	updateCollaborator,
} from '../../../services/collaborators';
import history from '../../../services/history';
import Contact from './Contact';
import { IoMdPin } from 'react-icons/io';

function NewCollaborator({ match }) {
	const {id} = match.params;
	const NEW_EXPERIENCE = { description: '', skills: '' }
	const NEW_CONTACT = { value: '', type: '' }
	const [collaborator, setCollaborator] = useState(
		{
			experiences: [NEW_EXPERIENCE],
			contacts: [NEW_CONTACT]
		}
	);
	
	const getCollaborator = async (id) => {
		try {
			await fetchCollaborator(id)
			.then((res) => {
				setCollaborator(res.data);
			})
			.catch((err) => {
				throw new Error();
			})
		} catch (error) {
			alert('Aconteceu um problema ao recurperar os dados do colaborador por favor tente mais tarde.');
		}
	};

	useEffect(() => {
		if (id) {
			getCollaborator(id)
		}
	}, [id]);

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

	const handleSaveCollaborator = async (e) => {
		try {
			if (id) {
				await updateCollaborator(collaborator)
				.then(res => {
					history.go('/collaborators');
			});
			return;
			}
			await saveCollaborator(collaborator)
				.then(res => {
					history.go('/collaborators');
			});
		} catch (error) {
			
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await handleSaveCollaborator();
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
		console.log(collaborator);
		// const [contacts] = collaborator;
		// const retorno = contacts.splice(index, 1);
		
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
				<HeaderContainer>
					<FaArrowLeft size={30} onClick={() => history.back()} />
					<Button type="submit">
						<FaCheck size={20} />
						{!!id ? 'Atualizar' : 'Salvar'}
					</Button>
				</HeaderContainer>
				<Info>
					<Avatar size={120} />
					<InputsContainer>
						<Input
							placeholder="Nome"
							onChange={(e) => handleChange({ name: e.target.value })}
							value={collaborator.name}
							name="name"
						/>
						<div>
							<Select
								onChange={(e) => handleChange({ role: e.target.value })}
								value={collaborator.role}
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
								value={experience.skills}
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
				<Map>
					<IoMdPin size={30} />
					<Input placeholder="Informe seu endereço" value={collaborator.local} />
				</Map>
			</Form>
		</NewCollaboratorContext.Provider>
	);
}

export default NewCollaborator;