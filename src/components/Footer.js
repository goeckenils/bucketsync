import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Footer = () => (
	<div>
		<Section>
			<Container>
				<GridContainer>
					<Column>
						<Title>WEBSITE</Title>
						<Link>
							<Text>Home</Text>
						</Link>
						<Link>
							<Text>Unsere Methode</Text>
						</Link>
						<Link>
							<Text>Leistungen</Text>
						</Link>
						<Link>
							<Text>Unternehmen</Text>
						</Link>
						<Link>
							<Text>Karriere</Text>
						</Link>
					</Column>
					<Column>
						<Title>LEISTUNGEN</Title>
						<Link>
							<Text>Beratung & Konzept</Text>
						</Link>
						<Link>
							<Text>Individuelle Software</Text>
						</Link>
						<Link>
							<Text>Mobile Applikation</Text>
						</Link>
						<Link>
							<Text>Design & Gestaltung</Text>
						</Link>
						<Link>
							<Text>Projektmanagement</Text>
						</Link>
						<Link>
							<Text>Wartung & Weiterentwicklung</Text>
						</Link>
					</Column>
					<Column>
						<Title>KARRIERE</Title>
						<Link>
							<Text>Karriere & Jobs</Text>
						</Link>
						<Link>
							<Text>Kununu</Text>
						</Link>
						<Link>
							<Text>Indeed</Text>
						</Link>
					</Column>
					<Column>
						<Title>ÜBER UNS</Title>
						<Link>
							<Text>Unternehmen</Text>
						</Link>
						<Link>
							<Text>Presse</Text>
						</Link>
						<Link>
							<Text>Kontakt</Text>
						</Link>
						<Link>
							<Text>Impressum</Text>
						</Link>
						<Link>
							<Text>Datenschutz</Text>
						</Link>
					</Column>
					<Column>
						<SocialCircle />
						<SocialCircle />
						<SocialCircle />
						<SocialCircle />
						<SocialCircle />
					</Column>
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
`;

export const SocialCircle = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 10px;
	display: flex;
	justify-content: center;
	margin: 5px;
	align-items: center;
	background: #38ada9;
`;

export const FooterLine = styled.div`
	width: 100%;
	height: 40px;
	background: #f1f1f1;
	margin-top: 40px;
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
	color: #58595b;
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
`;

export const GridContainer = styled.div`
	display: grid;
	grid-gap: 80px;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-template-rows: 1fr;
	grid-template-areas: ". . . . .";
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
`;
