import React from 'react';
import { FiSearch } from 'react-icons/fi'

import { Container } from './styles';
import { Input } from '../form';


function Search() {
	return (
		<Container>
			<Input />
			<button>
				<FiSearch />
			</button>
		</Container>
	);
}

export default Search;