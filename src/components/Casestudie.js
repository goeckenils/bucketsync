import React from 'react';
import styled from 'styled-components';

const Casestudie = () => (
	<Section>
		<Container>
			<div />
		</Container>
	</Section>
);

export default Casestudie;

export const Section = styled.section`
	/* background: #f8f8f8; */
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
