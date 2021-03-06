import styled from 'styled-components';

export const Container = styled.div`
	width: 800px;
	margin: 50px auto;
	padding: 10px;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	border: 1px solid #000;
`;

export const OptionsContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: flex-end;
	justify-content: end;

	svg {
		margin: 10px;
	}
`;

export const InfoContainer = styled.div`
	display: flex;
	align-items: flex-start;
`;

export const Line = styled.div`
	margin: 10px 20px;
	width: 100%;
	border: 1px solid #000;
`;

export const ExperiencesContainer = styled.div`
	border: 1px solid #000;
	width: 100%;

	&& {
		margin-top: 10px;
	}
`;

export const Experience = styled.div`
	background: #E6E6E6;
	margin: 10px;
`;

export const Skill = styled.span`
	border: 1px solid #000;
	margin: 5px;
`;

export const ContactContainer = styled.div`
	display: grid;
	grid-template-columns: auto auto;
	grid-gap: 20px;
	padding: 20px;
`;

export const Contact = styled.div`
	width: 200px;
	display: flex;
	align-items: center;
	justify-content:space-between;
`;

export const LocalContainer = styled.div`
	display: flex;
	align-items: center;
`;