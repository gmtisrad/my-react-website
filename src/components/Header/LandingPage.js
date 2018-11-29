import React from 'react';
import '../../styles/LandingPage.css';
import HeaderNav from './HeaderNav';
import Intro from './Intro';
import PageControl from '../PageControl';

function LandingPage(props) {
	return (
		<div className="landing-page">
			<HeaderNav/>
			<Intro/>
			<PageControl/>
		</div>
	);
}

export default LandingPage;