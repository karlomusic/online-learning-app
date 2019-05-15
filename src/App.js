import React from 'react';
import Header from './Header';
import Landing from './Landing';
import Footer from './Footer.js';
import CourseItemsList from './CourseItemsList';

/*Struktura stranice i komponente

		 
		/
			APP
				Header
				Landing
				CourseItemsList (map)
					CourseItem
					CourseItem
					CourseItem
				Footer
	URL:/ABOUT
			AboutPage
				Header
				About
				Footer
	URL:/COURSES
			CoursesPage
				Header
				CourseItemsList (map)
					CourseItem
					CourseItem
					CourseItem
				Footer
	URL:/COURS/{courseName}
			CourseDetailPage
				Header
					CourseItemDetailed
						CourseContentList (map)
							CourseContent
				Footer
	URL:/SIGNIN
			SignInPage
				Header
				LoginForm
				Footer

*/

function App() {
	return (
		<div className="App">
			<Header />
			<Landing />
			<CourseItemsList />
			<Footer HomeText="Home" FindUsAddress="Find Us Zagreb Croatia" MobilePhone="+38123456798" />
		</div>
	);
}

export default App;
