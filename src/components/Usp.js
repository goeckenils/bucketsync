import React from 'react';
import styled from 'styled-components';

import DaSec from '../images/DataSecurity.svg';
import Serv from '../images/Serv.svg';
import room from '../images/Room.svg';

const Usp = () => (
	<Section>
		<Container>
			<a id="usp" />
			<GridContainer>
				<TextBlock>
					<Title>Treiben Sie Compliance und Governance voran</Title>
					<Text>
						Vermeiden Sie die Offenlegung vertraulicher Daten und verkürzen Sie die Zeit bis zur Reaktion
						auf Vorfälle mit Sichtbarkeit Ihrer Daten und deren Kontext. Erkennen Sie schnell anomale
						Aktivitäten, klassifizieren Sie riskante Daten und halten Sie mit Vertrauen Compliance ein.
					</Text>
					<ReadMore>Lesen sie Mehr</ReadMore>
				</TextBlock>
				<ImageBlock>
					<DataSecurity />
				</ImageBlock>
			</GridContainer>
			<GridContainer>
				<ImageBlock>
					<Server />
				</ImageBlock>
				<TextBlock>
					<Title>Beseitigen Sie Datensilos und automatisieren Sie Richtlinien</Title>
					<Text>
						Zentrales Überwachen und Verwalten mit einer benutzerfreundlichen Webschnittstelle für ein
						hochentwickeltes End-to-End-Datenmanagement. Automatisieren Sie Richtlinien für Backup,
						Replikation, Archivierung und Disaster Recovery in Ihrer globalen und verteilten Architektur.
					</Text>
					<ReadMore>Lesen sie Mehr</ReadMore>
				</TextBlock>
			</GridContainer>
			<GridContainer>
				<TextBlock>
					<Title>Vereinfachen Sie das Multi-Cloud-Datenmanagement</Title>
					<Text>
						Seien Sie in Minutenschnelle einsatzbereit. Verwenden Sie eine Plattform, um Daten zu schützen,
						zu verwalten und zu sichern, die sich vor Ort, am Edge und in der Cloud befinden. Bieten Sie
						Datenwiederherstellungen in Rekordzeit, händefreie Verwaltung, unterbrechungsfreie Upgrades und
						automatisierte Workflows.
					</Text>
					<ReadMore>Lesen sie Mehr</ReadMore>
				</TextBlock>
				<ImageBlock>
					<Room />
				</ImageBlock>
			</GridContainer>
		</Container>
	</Section>
);

export default Usp;

export const Section = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 10;
`;

export const Container = styled.div`
	width: 1100px;
	padding: 20px 0px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const GridContainer = styled.div`
	display: grid;
	grid-gap: 80px;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr;
	grid-template-areas: ". .";
`;
export const TextBlock = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;
export const ReadMore = styled.div`
	color: #38ada9;
	font-size: 16px;
	margin: 10px 0px;
	flex: start;
	&:hover {
		text-decoration: underline;
		text-decoration-color: #38ada9;
	}
`;

export const ImageBlock = styled.div`
	width: 100%;
	height: 100%;
`;

export const DataSecurity = styled(DaSec)`
    width: 450px;
    height: 450px;
`;
export const Server = styled(Serv)`
    width: 450px;
    height: 450px;
`;
export const Room = styled(room)`
    width: 450px;
    height: 450px;
`;

export const Title = styled.h1`
	font-size: 20px;
	color: #58595b;
	margin: 10px 0px;
`;
export const Heading = styled.h1`
	font-size: 30px;
	color: #58595b;
	margin-bottom: 20px;
	margin-top: 10px;
`;

export const SubTitle = styled.h3`
	font-size: 16px;
	color: #58595b90;
	line-height: 1.4;
`;
export const Text = styled.h3`
	font-size: 16px;
	line-height: 1.5;
	color: #58595b90;
	margin-top: 10px;
`;
