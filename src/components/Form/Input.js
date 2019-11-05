import styled from 'styled-components';

export const Input = styled.input`
	color: #333;
	height: 60px;
	border-radius: 2px;
	background-color: #fff;
	-webkit-box-shadow: 0 2px 4px 0 rgba(12, 0, 46, 0.04);
	box-shadow: 0 2px 4px 0 rgba(12, 0, 46, 0.04);
	font-size: 1rem;
	border: 1px solid #fff;
	padding-left: 30px;
	transition: all 0.3s ease-in;
	margin: 10px;
	flex: 1 0 auto;
	&:focus {
		border-color: #f2effc;
		-webkit-box-shadow: 0 10px 14px 0 rgba(12, 0, 46, 0.06);
		box-shadow: 0 10px 14px 0 rgba(12, 0, 46, 0.06);
		outline: none;
	}
`;
export default Input;
