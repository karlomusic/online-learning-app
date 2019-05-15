import React from 'react';

class Footer extends React.Component {
	render() {
		return (
			<div className="Footer">
				<h3>{this.props.HomeText}</h3>
				<h3>About</h3>
				<h3>Contact on Mobile {this.props.MobilePhone}</h3>
				<h3>{this.props.FindUsAddress}</h3>
				<img src="#" />
			</div>
		);
	}
}

export default Footer;
