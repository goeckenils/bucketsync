import React from 'react';
import '../components/main.css';
import Navigation from '../components/navigation';
import Hero from '../components/Hero';
import Services from '../components/Services';
import ContactBtn from '../components/ContactBtn';
import Casestudie from '../components/Casestudie';
import styled from 'styled-components';

const IndexPage = () => (
	<div>
		<Navigation />
		<Hero />
		<Services />
		<ContactBtn />
		<Casestudie />
	</div>
);

export default IndexPage;

export const Section = styled.div`
	height: 1600px;
	width: 100vh;
`;
