import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/styles.css';
import ProjectPage from './pages/ProjectPage';

function App() {
	return (
		<Router className="mt-0">
			<Switch>
				<Route path="/projects">
					<ProjectPage />
				</Route>

				<Route path="/">
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
