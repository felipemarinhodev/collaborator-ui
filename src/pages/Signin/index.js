import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';

import history from '../../services/history';
import { Container, Header } from './styles';
import {Input, Button, ButtonAccess} from '../../components/form';
import api from '../../services/auth';

function Signin() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');


	const handleAccess = async () => {
		console.log('login', username, password);
		try {
			await api.post('/auth', {
				email: username,
				password
			})
			.then(res => {
				const { token } = res.data.data;
				sessionStorage.setItem('token', token);
				history.go('/collaborators');
				setPassword('');
				setUsername('');
			})
		} catch (error) {
			alert('Usuário ou senha estão errados')
		}
	}

	return (
		<Container>
			<Header>
				<big>Olá novamente</big>
			</Header>

			<Input
				placeholder="Usuário:"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
				/>
			<Input
				placeholder="Senha:"
				type="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>

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