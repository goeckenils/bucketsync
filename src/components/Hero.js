import React from 'react';
import styled, { keyframes } from 'styled-components';
import Logo from '../images/LogoIcon.svg';
import { PrimaryButton } from './Button';
import arrowdown from '../images/arrowdown.svg';
import Iso from '../images/LogoIso.svg';

const Hero = ({ scrollTo }) => {
	const scrollToFn = (e) => {
		e.preventDefault();

		const scrollToEl = document.querySelector(`#${scrollTo}`);
		scrollToEl &&
			scrollToEl.scrollIntoView({
				behavior: 'smooth'
			});
	};

	return (
		<Container>
			<Background className="custom-bg">
				<Wrapper>
					<TextWrapper>
						<Title>Backup Recovery Service</Title>
						<SubTitle>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores repellendus magni repellat.
							Eum veniam a vel ipsam! Ipsam, facere repellendus.
						</SubTitle>
						<HeroBtn onClick={scrollToFn}>Mehr</HeroBtn>
					</TextWrapper>
					<LogoWrapper>
						<IconLogo />
					</LogoWrapper>
				</Wrapper>
				<ArrowContainer onClick={scrollToFn}>
					<Text>scroll</Text>
					<ArrowDown />
				</ArrowContainer>
			</Background>
		</Container>
	);
};

export default Hero;

export const Container = styled.div`
	width: 100vh;
	height: 100vh;
	z-index: 1;
	@media (min-width: 0px) and (max-width: 1024px) {
		width: unset;
	}
`;

export const Background = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: #fff;
`;

export const Wrapper = styled.div`
	width: 1100px;
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media (min-width: 0px) and (max-width: 1024px) {
		flex-direction: column;
		width: unset;
		padding: 0px 20px;
	}
`;

export const Title = styled.h1`
	font-size: 45px;
	color: #fff;
	@media (min-width: 0px) and (max-width: 1024px) {
		font-size: 28px;
	}
`;

export const SubTitle = styled.h3`
	font-size: 18px;
	color: #ffffff95;
`;
export const Text = styled.h3`
	font-size: 14px;
	color: #fff;
	margin-top: 10px;
	/* @media (min-width: 0px) and (max-width: 1024px) {font-size: 50px;} */
`;

export const TextWrapper = styled.div``;
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
const bounce = keyframes`
	0%,
	20%,
	50%,
	80%,
	100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
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

			@media (min-width: 0px) and (max-width: 1024px) {
		width: 150px;
		height: 150px;
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

export const ArrowDown = styled(arrowdown)`
	width: 40px;
	height: 40px;
	 path {
		 fill: #fff;
	 }
 `;

export const ArrowContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	-moz-animation: ${bounce} 2s infinite;
	-webkit-animation: ${bounce} 2s infinite;
	animation: ${bounce} 2s infinite;
	flex-direction: column;
	position: absolute;
	bottom: 10px;
`;
