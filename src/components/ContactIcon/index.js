import React, { useMemo } from 'react';

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

	return (handleIcon());
}

export default ContactIcon;