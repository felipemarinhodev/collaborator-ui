import styled from 'styled-components';

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	width: 800px;
	border: 1px solid #000;
	padding: 15px;
`;

export const HeaderContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

export const Info = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	min-height: 200px;

	border-bottom: 1px solid #000;
`;

export const InputsContainer = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	flex: 10px;
	min-height: 150px;
`;

export const ButtonContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	width: 300px;
`;

export const Label = styled.label`
	font-size: 16px;
	font-weight: 900;
`;