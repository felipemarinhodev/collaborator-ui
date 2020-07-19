import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	height: 40px;
	justify-content: space-evenly;
	align-items: center;
	margin-top: 5px;
`;

export const Attribute = styled.button`
	border-radius: 30px;
	border: 1px solid #000;
	min-width: 100px;
	height: 30px;
	background: ${props => props.selected ? '#7159c1' : '#fff'};
	color: ${props => props.selected ? '#fff' : '#000'};
`;