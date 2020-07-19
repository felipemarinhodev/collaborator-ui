import React, { useState, useEffect } from 'react';
import {
	FaPlusCircle,
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
import Select from '../Select';
import Input from '../Input';

function Contacts() {
	const [contacts, setContacts] = useState([{ type: '', value: '' }]);
	const types = [
		{ name: 'Telefone fixo', value: 'resident' },
		{ name: 'Telefone celular', value: 'cell' },
		{ name: 'Telefone', value: 'work' },
		{ name: 'E-mail', value: 'email' },
		{ name: 'Facebook', value: 'facebook' },
		{ name: 'LinkedIn', value: 'linkedin' },
		{ name: 'GitHub', value: 'github' },
	];

	const handleAddContacts = () => {
		setContacts(contacts => [...contacts, { type: 'none', value: '' }])
	}

	const handleRemoveContact = (index) => {
		const contactsAux = contacts;
		const response = contactsAux.splice(index, 1);
		console.log(response);
		console.log('contactsAux', contactsAux);
	}

	const handleTypeContact = (event, index) => {
		const contact = contacts[index];
		const contactsAux = contacts;
		contactsAux[index] = { ...contact, type: event.target.value};

		console.log('handleTypeContact contactsAux', contactsAux);

		setContacts(contactsAux);
		console.log('handleTypeContact value', event.target.value, 'index', index);
		// const contactChangeß
	}

	useEffect(() => {
		console.log('Contacts', contacts);
	}, [contacts]);

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
			<label>Contatos</label>
				{contacts.map((contact, i) => (
					<Inputs key={`input-contact-${i}`}>
						{handleIcon(contact)}
						<div>
							<Select
								value={contact.type}
								onChange={(e) => handleTypeContact(e, i)}
							>
								<option value="">Selecione</option>
								{types.map(type => (
									<option key={type.value} value={type.value}>{type.name}</option>
								))}
							</Select>
						</div>
						<div>
							<Input />
						</div>
						<MdClose size={20} onClick={(i) => handleRemoveContact(i)} />
					</Inputs>
				))}
			</InputContainer>
			<FaPlusCircle size={30} onClick={() => handleAddContacts()} />
		</Container>
	);
}

export default Contacts;