import React from 'react';
import styled, { keyframes } from 'styled-components';
import Logo from '../images/LogoIcon.svg';
import { PrimaryButton } from './Button';

const Hero = () => (
	<Container>
		<Background className="custom-bg">
			<Wrapper>
				<TextWrapper>
					<Title>Backup Recovery Service</Title>
					<SubTitle>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores repellendus magni repellat. Eum
						veniam a vel ipsam! Ipsam, facere repellendus.
					</SubTitle>
					<HeroBtn>Mehr</HeroBtn>
				</TextWrapper>
				<LogoWrapper>
					<IconLogo />
				</LogoWrapper>
			</Wrapper>
		</Background>
	</Container>
);

export default Hero;

export const Container = styled.div`
	width: 100vh;
	height: 100vh;
	z-index: 0;
`;

export const Background = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #fff;
`;

export const Wrapper = styled.div`
	width: 1100px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Title = styled.h1`
	font-size: 45px;
	color: #fff;
`;

export const SubTitle = styled.h3`
	font-size: 18px;
	color: #ffffff95;
`;
export const Text = styled.h3`
	font-size: 14px;
	color: #fff;
	margin-top: 10px;
`;

export const TextWrapper = styled.div`width: 600px;`;
const LogoWrapper = styled.div``;

const float = keyframes`
    0% {
		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
		transform: translatey(0px);
	}
	50% {
		box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);
		transform: translatey(-4px);
	}
	100% {
		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
		transform: translatey(0px);
	}
`;

const IconLogo = styled(Logo)`
    width: 400px;
    height: 400px;

    
        path  {
            fill: #fff;
            animation: ${float} 6s ease-in-out infinite;
            transition: all 1s ease-in-out;
            transform: translatey(0px);
            box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
        }
`;
const HeroBtn = styled(PrimaryButton)`
    margin-left: 0;
    margin-top: 40px;
    color: #38ADA9;
    border-color: #fff;
    background: #fff;

     &:hover {
         background: #38ADA990;
         color: #fff;
         border-color:  #fff;
     }
 `;
