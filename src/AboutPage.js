import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Column, Row } from 'styled-bootstrap-components';
import Header from './Header';
import About from './About';
import Footer from './Footer';

class AboutPage extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<About />
				<Footer HomeText="Home" FindUsAddress="Find Us Zagreb Croatia" MobilePhone="+38123456798" />
			</div>
		);
	}
}
export default AboutPage;
