import React from 'react';
import '../styles/AboutPage.css';

function AboutPage(props) {
	return (
		<div className="about-page">
			<div className="content-grid">
				<div className="about-wrapper">
					<h1>About Me!</h1>
					<p>
					I'm a front end developer proficient in HTML5, CSS3, Javascript, React, C++, Git, Subversion, and MySQL. 
					</p>
					<p>
					I've been developing software since I was 16 years old, and have experience developing collaboratively as well. My team and I at Hillsboro Highschol developed a game using the Unity engine and C# to enter the Oregon Game Programming Challenge, at which we won the best rookie team award.
					</p>
					<p>
					During this process, we used the agile development cycle and were guided by volunteer mentors from IBM.
					</p>
				</div>
			</div>
		</div>
	);
}

export default AboutPage;