import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/styles.css';
import ProjectPage from './pages/ProjectPage';

function App() {
	return (
		<Router className="mt-0">
			<Switch>
				<Route path="/">
					<ProjectPage />
				</Route>

			</Switch>
		</Router>
	);
}

export default App;
