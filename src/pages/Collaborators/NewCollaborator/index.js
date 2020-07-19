import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { TiLightbulb } from 'react-icons/ti';

import { Container, Info, InputsContainer } from './styles';

import { Button, Input, Select, Map, List } from '../../../components/form'
import Avatar from '../../../components/Avatar';
import Contacts from '../../../components/form/Contacts';

function NewCollaborator() {
	return (
		<Container>
			<div>
				<Button>
					<FaCheck size={20} />
					Salvar
				</Button>
			</div>
			<Info>
				<Avatar size={120} />
				<InputsContainer>
					<Input placeholder="Nome" />
					<div>
						<Select>
							<option value="">Selecione</option>
							<option value="desenvolvedor_java">Desenvolvedor Java</option>
							<option value="arquiteto_solucao">Arquiteto de solução</option>
							<option value="analista_senior">Analista sênior</option>
						</Select>
					</div>
					<div>
						<TiLightbulb size={20} />
						<Select id="select-team">
							<option value="">Selecione</option>
							<option value="desenvolvedor_java">Chapter Front-end</option>
							<option value="arquiteto_solucao">Chapter Back-end</option>
							<option value="analista_senior">Chapter Arquitetura</option>
							<option value="analista_senior">Squad orçamento</option>
						</Select>
					</div>
				</InputsContainer>
			</Info>
			<List />
			<Contacts />
			<Map />
		</Container>
	);
}

export default NewCollaborator;