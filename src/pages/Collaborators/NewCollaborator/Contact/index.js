import React, { useContext, useEffect, useState } from 'react';
import { MdClose } from 'react-icons/md';

import { Container, InputContainer, Inputs } from './styles';
import { Input, Select } from '../../../../components/form';

import CollaboratorContext from '../context';
import ContactIcon from '../../../../components/ContactIcon';

function Contact({index, contact}) {
	// const [contact, setContact] = useState([{ type: '', value: '' }]);
	const { handleRemoveContact, handleContact } = useContext(CollaboratorContext);
	const types = [
		{ name: 'Telefone fixo', value: 'TELEFONE_FIXO' },
		{ name: 'Telefone celular', value: 'TELEFONE_CELULAR' },
		{ name: 'Telefone', value: 'TELEFONE' },
		{ name: 'E-mail', value: 'EMAIL' },
		{ name: 'Facebook', value: 'FACEBOOK' },
		{ name: 'LinkedIn', value: 'LINKEDIN' },
		{ name: 'GitHub', value: 'GITHUB' },
	];


	const handleContactIndex = (data) => {
		console.log('handleContactIndex', data);
		// setContact(cont => ({ ...cont, ...data }));
	}

	useEffect(() => {
		handleContact(contact, index);
	}, [contact]);

	return (
		<Container>
			<InputContainer>
				<Inputs>
					<ContactIcon type={contact.type} />
					<div>
						<Select
							value={contact.type}
							onChange={(e) => handleContactIndex({ type: e.target.value })}
						>
							<option value="">Selecione</option>
							{types.map(type => (
								<option key={type.value} value={type.value}>{type.name}</option>
							))}
						</Select>
					</div>
					<div>
						<Input
							value={contact.value}
							onChange={(e) => handleContactIndex({ value: e.target.value })}
						/>
					</div>
					<MdClose size={20} onClick={() => handleRemoveContact(index)} />
				</Inputs>
			</InputContainer>
		</Container>
	);
}

export default Contact;