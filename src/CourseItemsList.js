import React, { Component } from 'react';
import CourseItem from './CourseItem';
import { Container, Column, Row } from 'styled-bootstrap-components';
//import { slika } from './images/b&w.jpg';
class CourseItemsList extends Component {
	render() {
		const tecajevi = [
			{
				name: '1 Basic Course',
				des: 'Start Here',
				img: './images/b&w.jpg'
			},
			{
				name: '2 Advanced Course',
				des: 'Continue Here',
				img: './images/design2.jpg'
			},
			{
				name: '3 Expert Course',
				des: 'End Here',
				img: './images/b&w.jpg'
			},
			,
			{
				name: '4 Roma Course',
				des: 'End Here',
				img: './images/design1.jpg'
			},
			{
				name: '5 Expert Course',
				des: '2 End Here',
				img: './images/b&w.jpg'
			},
			{
				name: '6 Expert Course',
				des: '2 End Here',
				img: './images/design1.jpg'
			}
		];
		const ColumnsCourseItems = tecajevi.map((tecaj) => (
			<Column sm={12} md={6} lg={12}>
				<CourseItem CourseName={tecaj.name} Desc={tecaj.des} ImageSource={tecaj.img} />
			</Column>
		));
		return (
			<div>
				<Container>
					<Row>{ColumnsCourseItems}</Row>
				</Container>
			</div>
		);
	}
}

export default CourseItemsList;
