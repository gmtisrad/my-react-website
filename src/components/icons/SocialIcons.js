import React from 'react';
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub, faCodepen, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import '../../styles/SocialIcons.css';

library.add(faGithub, faCodepen, faLinkedin);

function SocialIcons(props) {
	return (
		<div className="social-icon-bar">
			<div className="social-icon"><a target="_blank" rel="noopener noreferrer" href="https://www.github.com/gmtisrad"><FontAwesomeIcon className="github-icon" size='3x' color='orange' icon={["fab", "github"]}/></a></div>
			<div className="social-icon"><a target="_blank" rel="noopener noreferrer" href="https://www.codepen.io/Gabe_M_Timm/"><FontAwesomeIcon className="codepen-icon" size='3x' color='orange' icon={["fab", "codepen"]}/></a></div>
			<div className="social-icon"><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/Gabe-M-Timm"><FontAwesomeIcon className="linkedin-icon" size='3x' color='orange' icon={["fab", "linkedin"]}/></a></div>
		</div>
	);
}

export default SocialIcons;