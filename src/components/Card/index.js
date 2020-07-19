import React from 'react';

import { TiLightbulb } from 'react-icons/ti';

import { Container, Info } from './styles';
import Avatar from '../Avatar';

function Card() {
	return (
		<Container>
			<Avatar  />
			<Info>
				<strong>Alberto Braga</strong>
				<small>Desenvolvedor</small>
				<div>
					<TiLightbulb size={20} />
					<small>Squad orçamento</small>
				</div>
			</Info>
		</Container>
	);
}

export default Card;