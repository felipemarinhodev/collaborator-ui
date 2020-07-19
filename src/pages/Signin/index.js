import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { uuid } from 'uuidv4';

import history from '../../services/history';
import { Container, Header } from './styles';
import {Input, Button, ButtonAccess} from '../../components/form';

function Signin() {

	const handleAccess = () => {
		sessionStorage.setItem('token', uuid());
		history.go('/collaborators');
	}

	return (
		<Container>

			<Header>
				<big>Olá novamente</big>
			</Header>

			<Input placeholder="Usuário:" />
			<Input placeholder="Senha:" type="password" />

			<Button onClick={() => handleAccess()}>Entrar</Button>
			<big>OU</big>
			<ButtonAccess onClick={() => handleAccess()} disabled>
				<FcGoogle size={40} />
				Acessar com Google
			</ButtonAccess>
			<ButtonAccess onClick={() => handleAccess()} disabled>
				<FaFacebook size={40} color="#4676ee" />
				Acessar com Facebook
			</ButtonAccess>

		</Container>
	);
}

export default Signin;