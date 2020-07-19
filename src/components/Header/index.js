import React from 'react';
import { FiLogOut } from 'react-icons/fi';

import { Container } from './styles';
import history from '../../services/history';

function Header() {

	const handleRemoveToken = () => {
		sessionStorage.removeItem('token');
		history.go('/');
	}

	return (
		<Container>
			<FiLogOut
				onClick={() => handleRemoveToken()}
				size={30}
			/>
		</Container>
	);
}

export default Header;