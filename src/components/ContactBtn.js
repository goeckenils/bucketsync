import React from 'react';
import styled from 'styled-components';
import IconPhone from '../images/phone.svg';

const ContactBtn = () => (
	<Wrapper>
		<BTN>
			<Phone className="hover" />
		</BTN>
	</Wrapper>
);

export default ContactBtn;

export const Wrapper = styled.div`
	position: sticky;
	bottom: 0;
	right: 0;
`;

export const BTN = styled.div`
	transition: all .25s ease-in-out;
	position: fixed;
	bottom: 0;
	right: 0;
	display: inline-flex;
	cursor: pointer;
	align-items: center;
	justify-content: center;
	margin: 0 3em 3em 0;
	border-radius: 50%;
	padding: .25em;
	width: 60px;
	height: 60px;
	border: 1px solid #38ada9;
	background: #fff;
	box-shadow: rgba(12, 0, 46, 0.2) 0px 4px 6px 0px;

	&:hover {
		background: #38ada9;

		.hover path {
			fill: #fff;
		}
	}
`;

export const Phone = styled(IconPhone)`
    height: 30px;
    width: 30px;
    path {
        fill:  #38ada9;
    }
`;
