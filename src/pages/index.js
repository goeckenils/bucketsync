import React from 'react';
import '../components/main.css';
import Navigation from '../components/navigation';
import Hero from '../components/Hero';
import styled from 'styled-components';

const IndexPage = () => (
	<div>
		<Navigation />
		<Hero />
	</div>
);

export default IndexPage;

export const Section = styled.div`
	height: 1600px;
	width: 100vh;
`;
