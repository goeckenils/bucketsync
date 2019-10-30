import React from 'react';
import styled, { keyframes } from 'styled-components';
import Iconbackup from '../images/backup.svg';
import Iconcloud from '../images/cloud.svg';
import Iconrecovery from '../images/recovery.svg';
import Iconprotection from '../images/protection.svg';

const Services = () => (
	<Section>
		<Container>
			<Heading>Dienstleistungen</Heading>
			<GridContainer>
				<Service className="Hoverable">
					<Backup className="Hoverable" />
					<TextWrapper>
						<Title className="Hoverable">Datensicherung</Title>
						<SubTitle className="Hoverable">
							Hören Sie mit der Verwaltung von Backups auf. Beschleunigen Sie den geschäftlichen Zugriff
							auf Daten mit sofortigen Wiederherstellungen und Klonen. Verwenden Sie eine Lösung, die vor
							Ort, via Edge oder in der Cloud ausgeführt werden kann.
						</SubTitle>
					</TextWrapper>
				</Service>
				<Service className="Hoverable">
					<Recovery className="Hoverable" />
					<Title className="Hoverable">Ransomware-Wiederherstellung</Title>
					<SubTitle className="Hoverable">
						Minimieren Sie die Ausfallzeiten Ihres Unternehmens durch neue Ransomware-Angriffe mit
						ML-basierter Erkennung, umfassender Folgenabschätzung und Wiederherstellung mit nur einem Klick.
					</SubTitle>
				</Service>
				<Service className="Hoverable">
					<Protection className="Hoverable" />
					<Title className="Hoverable">Daten-Governance</Title>
					<SubTitle className="Hoverable">
						Entdecken Sie Ihre sensibelsten Daten mit automatisierter Datenklassifizierung. Treiben Sie die
						Compliance von immer strengeren Datenschutzbestimmungen voran.
					</SubTitle>
				</Service>
				<Service className="Hoverable">
					<Cloud className="Hoverable" />
					<Title className="Hoverable">Cloud-Mobilität</Title>
					<SubTitle className="Hoverable">
						Reduzieren Sie die Zeit bis zur Cloud, lokalisieren Sie Daten mit vorausschauender Suche schnell
						in der Cloud und koordinieren Sie die Cloud-Notfallwiederherstellung mit automatisiertem
						Failover und Failback.
					</SubTitle>
				</Service>
			</GridContainer>
		</Container>
	</Section>
);

export default Services;

export const Section = styled.section`
	background: #f8f8f8;
	border-bottom: 1px solid #58595b40;
	border-top: 1px solid #58595b40;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Container = styled.div`
	width: 1100px;
	padding: 20px 0px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
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
	font-size: 14px;
	color: #58595b90;
	margin-top: 10px;
`;
export const TextWrapper = styled.div``;
export const GridContainer = styled.div`
	display: grid;
	grid-gap: 20px;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-template-rows: 1fr;
	grid-template-areas: ". . ." ". . .";
`;

export const Service = styled.div`
	display: flex;
	flex-direction: column;
	padding: 20px;
	border: 1px solid #38ada9;
	border-radius: 4px;
	display: flex;
	align-items: center;
	transition: all 0.4s ease-in-out;

	&:hover {
		background: #38ada9;
		color: #fff;
		transform: translateY(-10px);
		box-shadow: rgba(12, 0, 46, 0.2) 0px 4px 6px 0px;
	}

	.Hoverable,
	.Hoverable path {
		&:hover {
			fill: #fff;
			color: #fff;
		}
	}
`;

export const Cloud = styled(Iconcloud)`
    width: 45px;
    height: 45px;
    path {
          fill: #38ada9;
     }
`;
export const Recovery = styled(Iconrecovery)`
    width: 45px;
    height: 45px;
     path {
          fill: #38ada9;
     }
`;
export const Protection = styled(Iconprotection)`
    width: 45px;
    height: 45px;
     path {
          fill: #38ada9;
     }
`;
export const Backup = styled(Iconbackup)`
    width: 45px;
    height: 45px;
     path {
          fill: #38ada9;
     }
`;
