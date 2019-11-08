import React from 'react';
import styled from 'styled-components';
import { Input } from '../components/Form/Input';
import { Textarea } from '../components/Form/Textarea';
import { PrimaryButton } from '../components/Button';

const Form = () => (
	<Section className="case2bg">
		<Container>
			<GridContainer>
				<FlexContainer>
					<Block>
						<TextColumn>
							<Heading>Kontaktieren sie uns Jetzt</Heading>
							<Text>
								Ihnen ist noch nicht ganz klar, was Sie zur Lösung Ihrer Herausforderung benötigen? Wir
								sind für Sie da! Kontaktieren Sie uns jetzt für ein kostenloses Beratungsgespräch und
								erhalten Sie innerhalb der nächsten 24 Stunden einen persönlichen Rückruf zu Ihrem
								Anliegen.
							</Text>
						</TextColumn>
					</Block>
				</FlexContainer>
				<FormContainer>
					<InputGroup>
						<Input placeholder="Name" />
						<Input placeholder="Firma" />
					</InputGroup>
					<InputGroup>
						<Input placeholder="Email" />
						<Input placeholder="Telefonnummer" />
					</InputGroup>
					<InputGroup>
						<Textarea placeholder="Anliegen" />
					</InputGroup>
					<InputGroup>
						<ContactBtn>Jetzt Kontakt Anfordern</ContactBtn>
					</InputGroup>
				</FormContainer>
			</GridContainer>
		</Container>
	</Section>
);

export default Form;

export const Section = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const ContactBtn = styled(PrimaryButton)`
	border-color: #38ada9;
	background-color:#38ada9;
	color:#fff;
	margin-left: 12px;
`;

export const Container = styled.div`
	width: 900px;
	padding: 20px 0px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const GridContainer = styled.div`
	display: grid;
	grid-gap: 20px;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr;
	grid-template-areas: "." ".";
`;

export const Block = styled.div`
	display: flex;
	background: #ffffff;
	border-radius: 4px;
	align-items: center;
	padding: 40px;
`;

export const FormContainer = styled.div`
	flex-direction: column;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const TextColumn = styled.div`
	display: flex;
	flex-direction: column;
`;
export const TextC = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const InputGroup = styled.div`
	display: flex;
	width: 100%;
	@media (min-width: 0px) and (max-width: 500px) {
		flex-direction: column;
	}
`;

export const Title = styled.h1`
	font-size: 20px;
	color: #38ada9;
	margin: 10px 0px;
`;
export const Heading = styled.h1`
	font-size: 30px;
	color: #38ada9;
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
	color: #58595b90;
	margin-top: 10px;
`;

export const FlexContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;
