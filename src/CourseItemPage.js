import React from 'react';
import Header from './Header';
import Footer from './Footer';
import CourseItemDetail from './CourseItemDetail';

class CourseItemPage extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<CourseItemDetail CourseTitle={this.props.match.params.courseTitle} />
				<Footer HomeText="Home" FindUsAddress="Find Us Zagreb Croatia" MobilePhone="+1232131213" />
			</div>
		);
	}
}

export default CourseItemPage;
