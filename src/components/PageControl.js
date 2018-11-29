import React from 'react';
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHandPointDown, faHandPointUp} from '@fortawesome/free-solid-svg-icons';
import '../styles/PageControl.css';

library.add(faHandPointDown, faHandPointUp);

function PageControl(props) {
	return (
		<div className="control-panel">
			<div className="to-next"><FontAwesomeIcon className="down-icon" size='2x' icon='hand-point-down'/></div>
			<div className="to-top"><FontAwesomeIcon className="up-icon" size='2x' icon='hand-point-up'/></div>
		</div>
	);
}

export default PageControl;