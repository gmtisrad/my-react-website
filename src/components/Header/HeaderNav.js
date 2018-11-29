import React from 'react';
import '../../styles/HeaderNav.css';

function HeaderNav(props) {
	return (
		<nav className="nav-bar">
			<div className="title-wrapper">
				<div className="header-title">&lt;dev&gt;Gabe Timm&lt;/dev&gt;<span className="carot">|</span></div>
			</div>
			<div className="menu">
				<div className="menu-item">About</div>
				<div className="menu-item">Portfolio</div>
			</div>
		</nav>
	);
}

export default HeaderNav;