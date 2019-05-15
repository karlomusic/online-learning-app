import React from 'react';
class CourseItemContent extends React.Component {
	render() {
		return (
			<div>
				<p> Opis:{this.props.description}</p>
			</div>
		);
	}
}

export default CourseItemContent;
