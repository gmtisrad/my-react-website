import React, { Component } from 'react';
import '../styles/App.css';
import LandingPage from './Header/LandingPage.js';
import AboutPage from './AboutPage.js';

class App extends Component {
	ToNext () {
		
	}

	render() {
    	return (
    		<div>
    			<LandingPage/>
    			<AboutPage/>
    		</div>
    	);
  	}
}

export default App;
