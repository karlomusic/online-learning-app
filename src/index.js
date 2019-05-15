import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import AboutPage from './AboutPage';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SignInPage from './SignInPage';
import CoursesPage from './CoursesPage';
import CourseItemPage from './CourseItemPage';

const routing = (
	<Router>
		<div>
			<Route exact path="/" component={App} />

			<Route path="/Home" component={App} />
			<Route path="/About" component={AboutPage} />
			<Route path="/Course/:courseTitle" component={CourseItemPage} />
			<Route path="/SignIn" component={SignInPage} />
			<Route path="/Courses" component={CoursesPage} />
		</div>
	</Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
