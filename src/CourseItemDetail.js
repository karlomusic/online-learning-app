import React from 'react';
import CourseItemContent from './CourseItemContent';
class CourseItemDetail extends React.Component {
	render() {
		return (
			<div>
				<h1>{this.props.CourseTitle}</h1>
				<CourseItemContent description="asd" />
				<CourseItemContent description="asd" />
				<CourseItemContent description="asd" />
			</div>
		);
	}
}

export default CourseItemDetail;
