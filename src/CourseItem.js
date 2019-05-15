import React from 'react';
import { ItemDiv, ItemH1, descriptionP, Button } from './CSS/CourseItem/CourseItem';
import { Container, Column, Row } from 'styled-bootstrap-components';
class CourseItem extends React.Component {
	render() {
		return (
			<ItemDiv>
				<Container>
					<Row>
						<Column lg={6}>
							<ItemH1>{this.props.CourseName}</ItemH1>
							<descriptionP>{this.props.Desc}</descriptionP>
							<Button>Go to Course </Button>
						</Column>

						<Column lg={6}>
							<img src={this.props.ImageSource} width="100%" height="100%" />
						</Column>
					</Row>
				</Container>
			</ItemDiv>
		);
	}
}

export default CourseItem;
