import styled from 'styled-components';

export const Textarea = styled.textarea`
	color: #333;
	height: 60px;
	width: 100%;
	border-radius: 2px;
	font-size: 1rem;
	background-color: #fff;
	-webkit-box-shadow: 0 2px 4px 0 rgba(12, 0, 46, 0.04);
	box-shadow: 0 2px 4px 0 rgba(12, 0, 46, 0.04);
	border: 1px solid #fff;
	margin: 10px;
	transition: all 0.3s ease-in;
	padding: 30px;
	overflow: auto;
	resize: vertical;
	height: 220px;
	flex: 0 1 auto;
	&:focus {
		border-color: #f2effc;
		-webkit-box-shadow: 0 10px 14px 0 rgba(12, 0, 46, 0.06);
		box-shadow: 0 10px 14px 0 rgba(12, 0, 46, 0.06);
		outline: none;
	}
	&placeholder {
		color: white;
	}
`;

export default Textarea;
