import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	padding-right: 10px;
	
	div {
		height: 60px;
		border: 1px solid #000;
	}

	label {
		font-size: 16px;
		font-weight: 900;
	}
`;
