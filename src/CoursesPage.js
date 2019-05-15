import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Column, Row } from 'styled-bootstrap-components';
import Header from './Header';
import Footer from './Footer';
import CourseItemsList from './CourseItemsList';
import CourseItem from './CourseItem';

class CoursesPage extends React.Component {
	render() {
		const tecajevi2 = [
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
			}
		];
		const ColumnsCourseItems = tecajevi2.map((tecaj) => (
			<Column sm={12} md={6} lg={12}>
				<CourseItem CourseName={tecaj.name} Desc={tecaj.des} ImageSource={tecaj.img} />{' '}
			</Column>
		));
		return (
			<div>
				<Header />
				<CourseItemsList />
				<Footer HomeText="Home" FindUsAddress="Find Us Zagreb Croatia" MobilePhone="+1232131213" />
			</div>
		);
	}
}
export default CoursesPage;
