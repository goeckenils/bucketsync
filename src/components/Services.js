import React from 'react';
import styled from 'styled-components';
import Iconbackup from '../images/backup.svg';
import Iconcloud from '../images/cloud.svg';
import Iconrecovery from '../images/recovery.svg';
import Iconprotection from '../images/protection.svg';

const Services = () => (
	<Section>
		<Container>
			<Heading>Features</Heading>
			<Underline />
			<GridContainer>
				<Service className="Hoverable">
					<Circle className="bubble">
						<Backup className="Hoverable" />
					</Circle>
					<Title className="Hoverable">Datensicherung</Title>
					<SubTitle className="Hoverable">
						Hören Sie mit der Verwaltung von Backups auf. Beschleunigen Sie den geschäftlichen Zugriff auf
						Daten mit sofortigen Wiederherstellungen und Klonen. Verwenden Sie eine Lösung, die vor Ort, via
						Edge oder in der Cloud ausgeführt werden kann.
					</SubTitle>
					<ReadMore className="readmore">Lesen sie mehr</ReadMore>
				</Service>
				<Service className="Hoverable">
					<Circle className="bubble">
						<Recovery className="Hoverable" />
					</Circle>
					<Title className="Hoverable">Ransomware-Wiederherstellung</Title>
					<SubTitle className="Hoverable">
						Minimieren Sie die Ausfallzeiten Ihres Unternehmens durch neue Ransomware-Angriffe mit
						ML-basierter Erkennung, umfassender Folgenabschätzung und Wiederherstellung mit nur einem Klick.
					</SubTitle>
					<ReadMore className="readmore">Lesen sie mehr</ReadMore>
				</Service>
				<Service className="Hoverable">
					<Circle className="bubble">
						<Protection className="Hoverable" />
					</Circle>
					<Title className="Hoverable">Daten-Governance</Title>
					<SubTitle className="Hoverable">
						Entdecken Sie Ihre sensibelsten Daten mit automatisierter Datenklassifizierung. Treiben Sie die
						Compliance von immer strengeren Datenschutzbestimmungen voran.
					</SubTitle>
					<ReadMore className="readmore">Lesen sie mehr</ReadMore>
				</Service>
				<Service className="Hoverable">
					<Circle className="bubble">
						<Cloud className="Hoverable" />
					</Circle>
					<Title className="Hoverable">Cloud-Mobilität</Title>
					<SubTitle className="Hoverable">
						Reduzieren Sie die Zeit bis zur Cloud, lokalisieren Sie Daten mit vorausschauender Suche schnell
						in der Cloud und koordinieren Sie die Cloud-Notfallwiederherstellung mit automatisiertem
						Failover und Failback.
					</SubTitle>
					<ReadMore className="readmore">Lesen sie mehr</ReadMore>
				</Service>
				<Service className="Hoverable">
					<Circle className="bubble">
						<Cloud className="Hoverable" />
					</Circle>
					<Title className="Hoverable">Cloud-Mobilität</Title>
					<SubTitle className="Hoverable">
						Reduzieren Sie die Zeit bis zur Cloud, lokalisieren Sie Daten mit vorausschauender Suche schnell
						in der Cloud und koordinieren Sie die Cloud-Notfallwiederherstellung mit automatisiertem
						Failover und Failback.
					</SubTitle>
					<ReadMore className="readmore">Lesen sie mehr</ReadMore>
				</Service>
				<Service className="Hoverable">
					<Circle className="bubble">
						<Cloud className="Hoverable" />
					</Circle>
					<Title className="Hoverable">Cloud-Mobilität</Title>
					<SubTitle className="Hoverable">
						Reduzieren Sie die Zeit bis zur Cloud, lokalisieren Sie Daten mit vorausschauender Suche schnell
						in der Cloud und koordinieren Sie die Cloud-Notfallwiederherstellung mit automatisiertem
						Failover und Failback.
					</SubTitle>
					<ReadMore className="readmore">Lesen sie mehr</ReadMore>
				</Service>
			</GridContainer>
		</Container>
	</Section>
);

export default Services;

export const Section = styled.section`
	background: #fff;
	border-bottom: 1px solid #58595b40;
	border-top: 1px solid #58595b40;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Underline = styled.div`
	width: 100px;
	height: 1px;
	background: #38ada9;
	margin-bottom: 40px;
`;

export const Circle = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 80px;
	width: 80px;
	text-align: center;
	margin-bottom: 10px;
	background: #38ada920;
	border-radius: 15px;
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
	grid-gap: 40px;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	grid-template-areas: ". ." ". .";
`;

export const Service = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 20px;
	border-radius: 4px;
	display: flex;
	box-shadow: 0 0 5px rgba(0, 0, 0, .02), 0 5px 22px -8px rgba(0, 0, 0, .1);
	transition: all 0.4s ease;
	background: #fff;

	&:hover {
		box-shadow: 0 0 1px rgba(0, 0, 0, .03), 0 8px 26px -4px rgba(0, 0, 0, .1);
		transition: all .3s ease;
		transform: scale(1.05) translateY(-2.5%);

		.Hoverable,
		.Hoverable path {
		}
		.readmore {
		}
		.bubble {
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
