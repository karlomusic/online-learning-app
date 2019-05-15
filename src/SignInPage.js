import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import LoginForm from './LoginForm';
class SignInPage extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<LoginForm />
				<Footer HomeText="Home" FindUsAddress="Find Us Zagreb Croatia" MobilePhone="+38123456798" />
			</div>
		);
	}
}
export default SignInPage;
