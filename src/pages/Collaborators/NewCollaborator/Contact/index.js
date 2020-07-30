import React, { useContext, useEffect, useState } from 'react';
import {
	FaFacebookF,
	FaPhoneAlt,
	FaEnvelope,
	FaLinkedinIn,
	FaGithub,
	FaBuilding,
	FaQuestion,
} from 'react-icons/fa';
import { MdClose, MdPhoneIphone } from 'react-icons/md';

import { Container, InputContainer, Inputs } from './styles';
import { Input, Select } from '../../../../components/form';

import CollaboratorContext from '../context';

function Contact({index}) {
	const [contact, setContact] = useState([{ type: '', value: '' }]);
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
		setContact(cont => ({ ...cont, ...data }));
	}

	useEffect(() => {
		handleContact(contact, index);
		console.log('Contact', contact);
	}, [contact]);

	const handleIcon = (contact) => {
		switch (contact.type) {
			case 'resident':
				return <FaPhoneAlt size={25} />
			case 'cell':
				return <MdPhoneIphone size={25} />
			case 'work':
				return <FaBuilding size={25} />
			case 'email':
				return <FaEnvelope size={25} />
			case 'facebook':
				return <FaFacebookF size={25} />
			case 'linkedin':
				return <FaLinkedinIn size={25} />
			case 'github':
				return <FaGithub size={25} />
			default:
				return <FaQuestion size={25} />
		}
	};

	return (
		<Container>
			<InputContainer>
				<Inputs>
					{handleIcon(contact)}
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