import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	padding: 10px;
	border: 1px solid #000;
	justify-content: flex-start;
	align-items: center;
	width: 370px;
`;

export const Info = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	div {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;