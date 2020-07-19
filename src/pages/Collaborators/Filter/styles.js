import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	padding-bottom: 10px;
	margin-bottom: 10px;
	border-bottom: 2px solid #000;
`;

export const Header = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 10px;
`;

export const New = styled(Link)`
	background: #fff;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	width: 100px;
	border: 1px solid #000;
	color: #000;
`;