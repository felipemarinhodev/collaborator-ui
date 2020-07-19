import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 800px;
	background: #fff;
	border: 2px solid #000;
	padding: 10px 20px;
`;

	export const ButtonMore = styled.button`
		border: 1px solid #000;
		border-radius: 50%;
		width: 60px;
		height: 60px;
`;

export const List = styled.div`
	display: grid;
	grid-template-columns: auto auto;
	grid-gap: 20px;
	padding: 20px;
`;