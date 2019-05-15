import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
	render() {
		return (
			<div className="Header">
				<h1>Navigation bar</h1>

				<Link to="/">
					<button>Home</button>
				</Link>
				<Link to="/About">
					<button>About</button>
				</Link>
				<Link to="/LoginForm">
					<button>Sign In</button>
				</Link>
			</div>
		);
	}
}

export default Header;
