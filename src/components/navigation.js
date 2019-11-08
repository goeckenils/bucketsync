import React from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';
import Logo from '../images/Logo.svg';
import { PrimaryButton } from './Button';
import useScroll from 'react-use-scroll';

const Navigation = (props) => {
	const scroll = useScroll();

	{
		if (scroll > 50) {
			return (
				<NavWrapper inverted={props.inverted}>
					<Container>
						<Menu>
							<LogoWrapper>
								<EditLogo inverted={props.inverted} />
							</LogoWrapper>
							<ItemWrapper>
								<MenuItem>
									<Link to="/">
										<Titles inverted={props.inverted}>Technologie</Titles>
									</Link>
								</MenuItem>
								<MenuItem>
									<Link to="/">
										<Titles inverted={props.inverted}>Service</Titles>
									</Link>
								</MenuItem>
								<MenuItem>
									<Link to="/">
										<Titles inverted={props.inverted}>Referenzen</Titles>
									</Link>
								</MenuItem>
								<MenuItem>
									<InvertedButton inverted={props.inverted}>Contact us</InvertedButton>
								</MenuItem>
							</ItemWrapper>
						</Menu>
					</Container>
				</NavWrapper>
			);
		} else {
			return (
				<InvertedNavWrapper inverted={props.inverted}>
					<Container>
						<Menu>
							<LogoWrapper>
								<InvertedEditLogo inverted={props.inverted} />
							</LogoWrapper>
							<ItemWrapper>
								<MenuItem>
									<Link to="/">
										<InvertedTitles inverted={props.inverted}>Technologie</InvertedTitles>
									</Link>
								</MenuItem>
								<MenuItem>
									<Link to="/">
										<InvertedTitles inverted={props.inverted}>Service</InvertedTitles>
									</Link>
								</MenuItem>
								<MenuItem>
									<Link to="/">
										<InvertedTitles inverted={props.inverted}>Referenzen</InvertedTitles>
									</Link>
								</MenuItem>
								<MenuItem>
									<ScrollInvertedButton inverted={props.inverted}>Contact us</ScrollInvertedButton>
								</MenuItem>
							</ItemWrapper>
						</Menu>
					</Container>
				</InvertedNavWrapper>
			);
		}
	}
};

export default Navigation;

export const InvertedButton = styled(PrimaryButton)`
	background: none;
	border-color: ${(props) => (props.inverted ? css`#fff` : css`#38ada9`)};
	color: ${(props) => (props.inverted ? css`#fff` : css`#38ada9`)};
	transition: all 0.6s ease-in-out;
	
`;
export const ScrollInvertedButton = styled(PrimaryButton)`
	background: none;
	transition: all 0.6s ease-in-out;
	border-color:#fff;
	color:#fff;
`;

export const NavWrapper = styled.div`
	display: flex;
	justify-content: center;
	transition: all 0.6s ease-in-out;
	position: fixed;
	background: ${(props) => (props.inverted ? css`none` : css`#fff`)};
	width: 100%;
	align-items: center;
	z-index: 100;
	box-shadow: ${(props) => (props.inverted ? css`none` : css`rgba(12, 0, 46, 0.06) 0px 4px 6px 0px`)};

	@media (min-width: 0px) and (max-width: 1024px) {
		display: none;
	}
`;
export const InvertedNavWrapper = styled.div`
	display: flex;
	justify-content: center;
	transition: all 0.6s ease-in-out;
	position: fixed;
	background: none;
	width: 100%;
	align-items: center;
	z-index: 100;
	box-shadow: none;
	@media (min-width: 0px) and (max-width: 1024px) {
		display: none;
	}
`;
export const Container = styled.div`width: 1250px;`;
export const Menu = styled.div`
	display: flex;
	justify-content: space-between;
	transition: all 0.6s ease-in-out;
	align-items: center;
`;
export const MenuItem = styled.div`padding: 5px 10px;`;
export const LogoWrapper = styled.div``;
export const EditLogo = styled(Logo)`
height: 55px;
transition: all 0.6s ease-in-out;
${(props) =>
	props.inverted &&
	css`
		path {
			fill: #fff !important;
		}
	`}
`;
export const InvertedEditLogo = styled(Logo)`
height: 55px;
transition: all 0.6s ease-in-out;
	path {
			fill: #fff !important;
		}
`;
export const ItemWrapper = styled.div`
	display: flex;
	align-items: center;
	transition: all 0.6s ease-in-out;
	justify-content: center;
`;

export const Titles = styled.h3`
	font-size: 16px;
	transition: all 0.6s ease-in-out;
	color: ${(props) => (props.inverted ? css`#fff` : css`#58595b`)};

	&:hover {
		text-decoration: underline;
	}
`;
export const InvertedTitles = styled.h3`
	font-size: 16px;
	transition: all 0.6s ease-in-out;
	color: #fff;

	&:hover {
		text-decoration: underline;
	}
`;
