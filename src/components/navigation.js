import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Logo from '../images/Logo.svg';
import { PrimaryButton } from './Button';

const Navigation = () => (
	<NavWrapper>
		<Container>
			<Menu>
				<LogoWrapper>
					<EditLogo />
				</LogoWrapper>
				<ItemWrapper>
					<MenuItem>
						<Link to="/">
							<Titles>Technologie</Titles>
						</Link>
					</MenuItem>
					<MenuItem>
						<Link to="/">
							<Titles>Service</Titles>
						</Link>
					</MenuItem>
					<MenuItem>
						<Link to="/">
							<Titles>Referenzen</Titles>
						</Link>
					</MenuItem>
					<MenuItem>
						<PrimaryButton>Contact us</PrimaryButton>
					</MenuItem>
				</ItemWrapper>
			</Menu>
		</Container>
	</NavWrapper>
);

export default Navigation;

export const NavWrapper = styled.div`
	display: flex;
	justify-content: center;
	position: fixed;
	background: #fff;
	width: 100%;
	align-items: center;
	z-index: 100;
	box-shadow: rgba(12, 0, 46, 0.06) 0px 4px 6px 0px;
`;
export const Container = styled.div`width: 1100px;`;
export const Menu = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
export const MenuItem = styled.div`padding: 5px 10px;`;
export const LogoWrapper = styled.div``;
export const EditLogo = styled(Logo)`
height: 55px;
`;
export const ItemWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Titles = styled.h3`
	font-size: 16px;
	color: #58595b;

	&:hover {
		text-decoration: underline;
	}
`;
