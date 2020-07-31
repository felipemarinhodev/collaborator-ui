import React from 'react';

import {
	FaFacebookF,
	FaPhoneAlt,
	FaEnvelope,
	FaLinkedinIn,
	FaGithub,
	FaBuilding,
	FaQuestion,
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';

function ContactIcon({type}) {
	const handleIcon = () => {
		switch (type) {
			case 'TELEFONE_FIXO':
				return <FaPhoneAlt size={25} />
			case 'TELEFONE_CELULAR':
				return <MdPhoneIphone size={25} />
			case 'TELEFONE':
				return <FaBuilding size={25} />
			case 'EMAIL':
				return <FaEnvelope size={25} />
			case 'FACEBOOK':
				return <FaFacebookF size={25} />
			case 'LINKEDIN':
				return <FaLinkedinIn size={25} />
			case 'GITHUB':
				return <FaGithub size={25} />
			default:
				return <FaQuestion size={25} />
		}
	};

	return (handleIcon());
}

export default ContactIcon;