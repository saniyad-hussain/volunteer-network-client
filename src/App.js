import React, { createContext, useState } from 'react';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import VolunteerList from './components/VolunteerList/VolunteerList';
import Dashboard from './components/Dashboard/Dashboard';
import Events from './components/Events/Events';
export const userContext = createContext();

function App() {
	const [loggedInUser, setLoggedInUser] = useState({
		name: '',
		email: '',
		isLoggedIn: false,
		error: false,
		success: false,
	});
	return (
		<>
			<userContext.Provider value={[loggedInUser, setLoggedInUser]}>
				<Router>
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route path="/login">
							<Login />
						</Route>
						<Route path="/volunteerlist">
							<VolunteerList />
						</Route>
						<PrivateRoute path="/registration/:id">
							<Registration />
						</PrivateRoute>
						<Route path="/dashboard">
							<Dashboard />
						</Route>
						<Route path="/addevent">
							<Events />
						</Route>
					</Switch>
				</Router>
			</userContext.Provider>
		</>
	);
}

export default App;
