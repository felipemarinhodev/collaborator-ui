import styled from 'styled-components';

export const Container = styled.div`
	margin-top: 15px;
	display: flex;
	width: 100%;
`;

export const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-bottom: 10px;
`;

export const ExperiencesContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;

	& + & {
		margin-top: 25px;
	}
`;
