import styled from 'styled-components';

export const ItemDiv = styled.div`
	padding: 20px 10px;
	flex-direction: row;
	flex-wrap: wrap;
	border-color: #faebd7;
	background-color: #45a29e;
	align-content: center;
	border-color: black;
	border-width: "40px";
`;

export const ItemH1 = styled.h1`
	font-family: 'Lucida Sans';
	font-size: 64px;
	color: #faebd7;
`;
export const descriptionP = styled.p`
	font-family: 'Open Sans';
	font-size: 16px;
	color: blueviolet;
`;
export const Button = styled.button`
	/* Adapt the colors based on primary prop */
	background: ${(props) => (props.primary ? 'palevioletred' : 'white')};
	color: ${(props) => (props.primary ? 'white' : 'palevioletred')};

	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border: 2px solid palevioletred;
	border-radius: 3px;
`;
