import React from 'react';
import { FiCheck } from 'react-icons/fi'

import Search from '../../../components/Search';

import { Container, Header, New } from './styles';
import Attributes from './Attributes';

function Filter() {
	return (
		<Container>
			<Header>
				<h1>Colaboradores</h1>
				<New to="collaborator/new">
					<FiCheck size={20} />
					Novo
				</New>
			</Header>
			<Search />
			<Attributes />

		</Container>
	);
}

export default Filter;