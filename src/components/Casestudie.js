import React from 'react';
import styled, { keyframes } from 'styled-components';
import { PrimaryButton } from '../components/Button';
import IconForward from '../images/forward.svg';

const Casestudie = () => (
	<Section>
		<Container>
			<Heading>Casestudie</Heading>
			<Underline />
			<GridContainer>
				<Block>
					<TextWrapper>
						<Title>Viewing the docs</Title>
						<Text>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius aliquam soluta ullam numquam
							possimus sunt? Nisi quia a vel eaque, minima necessitatibus voluptate aliquam quisquam iure
							aliquid nostrum. Magni, illum.
						</Text>
						<Text>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius aliquam soluta ullam numquam
							possimus sunt? Nisi quia a vel eaque, minima necessitatibus voluptate aliquam quisquam iure
							aliquid nostrum. Magni, illum.
						</Text>
						<CaseBtn>
							Lesen sie mehr
							<Forward classname="Hoverable" />
						</CaseBtn>
					</TextWrapper>
				</Block>
				<Block>
					<Picture className="case" />
				</Block>
			</GridContainer>
		</Container>
	</Section>
);

export default Casestudie;

const floatx = keyframes`
    0% {
		transform: translatex(0px);
	}
	50% {
		transform: translatex(-4px);
	}
	100% {
		transform: translatex(0px);
	}
`;

export const Forward = styled(IconForward)`
    width: 15px;
    height: 15px;
    margin-left: 10px;
    transition: all 0.6s ease-in-out;
         animation: ${floatx} 2s ease-in-out infinite;
        path {
            fill: #38ada9 ;
    }

`;

export const CaseBtn = styled(PrimaryButton)`
    margin-left: 0;
    margin-top: 20px;
    display: flex;
    background: none;
    align-items: center;
    justify-content: center;

    &:hover {
        .Hoverable path {
            transform: translateX(10px);
            fill: #fff ;
            }
        }
`;

export const Section = styled.section`
	background: #f7f8f8;
	display: flex;
	justify-content: center;
	align-items: center;
`;
export const TextWrapper = styled.div``;
export const Underline = styled.div`
	width: 100px;
	height: 1px;
	background: #38ada9;
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
	grid-gap: 20px;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr;
	grid-template-areas: ". .";
`;

export const Block = styled.div`
	width: 600px;
	height: 500px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Picture = styled.div``;

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
