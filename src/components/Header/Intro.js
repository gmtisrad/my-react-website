import React from 'react';
import '../../styles/Intro.css';
import SocialIcons from '../icons/SocialIcons';

function Intro(props) {
	return (
		<div className="content-grid">
			<div className="intro-wrapper">
				<div className="intro">Hi, I'm Gabe</div>
				<div className="description">'React'ive Design | Quick Learner | I Work Too Hard </div>
				<SocialIcons/>
			</div>
		</div>
	)
}

export default Intro;