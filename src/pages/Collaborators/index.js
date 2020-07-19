import React from 'react';

import Card from '../../components/Card';

import { Container, List, ButtonMore } from './styles';

import Filter from './Filter';

function Collaborators() {
	return (
		<Container>
			<Filter />
			<List>
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</List>
			<ButtonMore>mais</ButtonMore>
		</Container>
	);
}

export default Collaborators;