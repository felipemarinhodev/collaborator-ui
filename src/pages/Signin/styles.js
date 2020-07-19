import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	padding-right: 100px;
	padding-left: 100px;
	align-items: center;
	width: 500px;
	height: 700px;
	background: #fff;
	border: 1px solid #000;
`;

export const Header = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;

	big {
		font-size: 24px;
	}
`;
