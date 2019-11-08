import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import IconFacebook from '../images/facebook.svg';
import IconLinkedin from '../images/linkedin.svg';
import IconXing from '../images/xing.svg';
import IconInsta from '../images/instagram.svg';

const Footer = () => (
	<div>
		<Section>
			<Container>
				<GridContainer>
					<Column>
						<Title>WEBSITE</Title>
						<Link to="/">
							<Text>Home</Text>
						</Link>
						<Link to="/">
							<Text>Unsere Methode</Text>
						</Link>
						<Link to="/">
							<Text>Leistungen</Text>
						</Link>
						<Link to="/">
							<Text>Unternehmen</Text>
						</Link>
						<Link to="/">
							<Text>Karriere</Text>
						</Link>
					</Column>
					<Column>
						<Title>LEISTUNGEN</Title>
						<Link to="/">
							<Text>Beratung & Konzept</Text>
						</Link>
						<Link to="/">
							<Text>Individuelle Software</Text>
						</Link>
						<Link to="/">
							<Text>Mobile Applikation</Text>
						</Link>
						<Link to="/">
							<Text>Design & Gestaltung</Text>
						</Link>
						<Link to="/">
							<Text>Projektmanagement</Text>
						</Link>
						<Link to="/">
							<Text>Wartung & Weiterentwicklung</Text>
						</Link>
					</Column>
					<Column>
						<Title>KARRIERE</Title>
						<Link to="/">
							<Text>Karriere & Jobs</Text>
						</Link>
						<Link to="/">
							<Text>Kununu</Text>
						</Link>
						<Link to="/">
							<Text>Indeed</Text>
						</Link>
					</Column>
					<Column>
						<Title>ÜBER UNS</Title>
						<Link to="/">
							<Text>Unternehmen</Text>
						</Link>
						<Link to="/">
							<Text>Presse</Text>
						</Link>
						<Link to="/">
							<Text>Kontakt</Text>
						</Link>
						<Link to="/">
							<Text>Impressum</Text>
						</Link>
						<Link to="/">
							<Text>Datenschutz</Text>
						</Link>
					</Column>
					<SocialColumn>
						<SocialCircle>
							<Instagram />
						</SocialCircle>
						<SocialCircle>
							<Facebook />
						</SocialCircle>
						<SocialCircle>
							<Xing />
						</SocialCircle>
						<SocialCircle>
							<Linkedin />
						</SocialCircle>
					</SocialColumn>
				</GridContainer>
			</Container>
		</Section>
		<FooterLine>
			<FContainer>
				<FTitle>Copyright © 2019 Incoqnito GmbH. Alle Rechte vorbehalten.</FTitle>
			</FContainer>
		</FooterLine>
	</div>
);

export default Footer;

export const Section = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	padding-top: 50px;
	background: #58595b;
`;

export const SocialCircle = styled.div`
	width: 35px;
	height: 35px;
	border-radius: 10px;
	display: flex;
	justify-content: center;
	margin: 5px;
	align-items: center;
	transition: all 0.3s ease-in-out;
	background: #38ada9;

	&:hover {
		background: #38ada990;
	}
`;

export const FooterLine = styled.div`
	width: 100%;
	height: 40px;
	background: #58595b;
	align-items: center;
	display: flex;
	justify-content: center;
`;

export const Title = styled.div`
	font-size: 14px;
	color: #38ada9;
	margin: 20px 0px;
`;
export const FTitle = styled.div`
	font-size: 14px;
	color: #38ada9;
`;
export const Text = styled.div`
	font-size: 11px;
	color: #fff;
	margin: 10px 0px;
`;

export const Container = styled.div`
	width: 1100px;
	padding: 20px 0px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
export const FContainer = styled.div`
	width: 1100px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	@media (min-width: 0px) and (max-width: 1024px) {
		padding: 0px 20px;
		text-align: center;
	}
`;

export const GridContainer = styled.div`
	display: grid;
	grid-gap: 80px;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
	grid-template-rows: 1fr;
	@media (min-width: 0px) and (max-width: 1024px) {
		grid-template-columns: 1fr;
		grid-gap: 10px;
		grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
	}
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
`;
export const SocialColumn = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 40px;
	@media (min-width: 0px) and (max-width: 1024px) {
		flex-direction: row;
	}
`;

export const Facebook = styled(IconFacebook)`
    width: 25px;
    height: 25px;

    path {
        fill: #fff !important;
    }
`;
export const Instagram = styled(IconInsta)`
    width: 25px;
    height: 25px;

    path {
        fill: #fff !important;
    }
`;
export const Linkedin = styled(IconLinkedin)`
    width: 25px;
    height: 25px;

    path {
        fill: #fff !important;
    }
`;
export const Xing = styled(IconXing)`
    width: 25px;
    height: 25px;

    path {
        fill: #fff !important;
    }
`;
