import React from 'react';
import Button from '@material-ui/core/Button';
//import styled from 'styled-components';
//import logo from './images/design1.jpg';
import { LandingDiv } from './CSS/Landing/Landing';

class Landing extends React.Component {
	render() {
		return (
			<LandingDiv>
				<h1>Learn and Create</h1>
				<h1>WELCOME TO ONLINE LEARNING</h1>
				<p> LoremIpsum....</p>
				<p> LoremIpsum....</p>
				<Button>START</Button>
			</LandingDiv>
		);
	}
}

export default Landing;
