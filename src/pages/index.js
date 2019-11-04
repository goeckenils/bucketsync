import React from 'react';
import '../components/main.css';
import Navigation from '../components/navigation';
import Hero from '../components/Hero';
import Services from '../components/Services';
import ContactBtn from '../components/ContactBtn';
import Casestudie from '../components/Casestudie';
import Footer from '../components/Footer';

const IndexPage = () => (
	<div>
		<Navigation />
		<Hero />
		<Services />
		<ContactBtn />
		<Casestudie />
		<Footer />
	</div>
);

export default IndexPage;
