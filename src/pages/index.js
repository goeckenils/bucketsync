import React from 'react';
import '../components/main.css';
import Navigation from '../components/navigation';
import Hero from '../components/Hero';
import Services from '../components/Services';
import ContactBtn from '../components/ContactBtn';
import Casestudie from '../components/Casestudie';
import Footer from '../components/Footer';
import Form from '../components/Form';
import Usp from '../components/Usp';

const IndexPage = () => (
	<div>
		<Navigation />
		<Hero />
		<Usp />
		<Services />
		<ContactBtn />
		<Casestudie />
		<Form />
		<Footer />
	</div>
);

export default IndexPage;
