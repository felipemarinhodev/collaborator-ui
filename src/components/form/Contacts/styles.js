import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	margin-top: 10px;
	margin-bottom: 10px;

	label {
		font-size: 16px;
		font-weight: 900;
	}
`;

export const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;

	&::after {
		margin-top: 25px;	
	}
`;

export const Inputs = styled.div`
	display: flex;

	justify-content: center;
	align-items: center;
	justify-content: space-between;
	border: 1px solid #000;
	padding: 5px;

	& + & {
		margin-top: 5px;
	}
`;