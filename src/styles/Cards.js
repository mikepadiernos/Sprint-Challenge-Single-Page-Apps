import styled from "styled-components";

export const Card = styled.article`
	border: 1px solid #AFAFAF;
	border-radius: 4px;
	width: 31%;
	display: flex;
	flex-direction: column;
	margin: 1%;
	h2 { 
		font-family: 'Ubuntu Condensed', sans-serif;
		background-color: #FFFA00;
		margin: 0;
		padding: 1rem;
		text-align: center;
		border-bottom: 1px solid #AFAFAF;
	}
	img {
		width: 100%;
	}
	table {
		width: 100%;
	}
	table tbody tr td {
		padding: 1rem;
	}
	table tbody tr td.info-label {
		font-weight: bold;
		width: 10%;
		padding-right: 0;
	}
	table tbody tr td.info-text {
		padding-left: 0;
	}
`;