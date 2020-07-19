import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	padding-right: 10px;
	
	textArea {
		height: 60px;
		resize: none;

		padding: 10px;
	}

	label {
		font-size: 16px;
		font-weight: 900;
	}
`;
