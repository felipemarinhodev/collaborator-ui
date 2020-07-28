import React, { useState, useEffect } from 'react';
import { FaCheck } from 'react-icons/fa';
import { TiLightbulb } from 'react-icons/ti';

import { Form, Info, InputsContainer } from './styles';

import { Button, Input, Select, Map, List } from '../../../components/form'
import Avatar from '../../../components/Avatar';
import Contacts from '../../../components/form/Contacts';

import NewCollaboratorContext from './context';

function NewCollaborator() {
	const [collaborator, setCollaborator] = useState({});

	const handleChange = (data) => {
		setCollaborator(collaborator => ({ ...collaborator, ...data }));
	};

	const handleSubmit = () => {
		console.log('Collaborator', collaborator);
	};

	useEffect(() => { console.log('Collaborator', collaborator);}, [collaborator]);

	return (
		<NewCollaboratorContext.Provider value={
			{
				handleChange,
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
								<option value="desenvolvedor_java">Desenvolvedor Java</option>
								<option value="arquiteto_solucao">Arquiteto de solução</option>
								<option value="analista_senior">Analista sênior</option>
							</Select>
						</div>
						<div>
							<TiLightbulb size={20} />
							<Select
								id="select-team"
								onChange={(e) => handleChange({ team: e.target.value })}
							>
								<option value="">Selecione</option>
								<option value="desenvolvedor_java">Chapter Front-end</option>
								<option value="arquiteto_solucao">Chapter Back-end</option>
								<option value="analista_senior">Chapter Arquitetura</option>
								<option value="analista_senior">Squad orçamento</option>
							</Select>
						</div>
					</InputsContainer>
				</Info>
				<List 
					handleChange={handleChange}
				/>
				<Contacts />
				<Map />
			</Form>
		</NewCollaboratorContext.Provider>
	);
}

export default NewCollaborator;