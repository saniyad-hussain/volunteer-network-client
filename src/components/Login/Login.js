import React, { useContext } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebase.config';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
firebase.initializeApp(firebaseConfig);

const Login = () => {
	const [loggedInUser, setLoggedInUser] = useContext(userContext);
	const history = useHistory();
	const location = useLocation();
	const { from } = location.state || { from: { pathname: '/' } };
	const googleSignIn = () => {
		var provider = new firebase.auth.GoogleAuthProvider();
		firebase
			.auth()
			.signInWithPopup(provider)
			.then((result) => {
				const { displayName, email } = result.user;
				const signInUser = { name: displayName, email };
				setLoggedInUser(signInUser);
				storeAuthToken();
				history.replace(from);
			})
			.catch((error) => {});
	};

	const storeAuthToken = () => {
		firebase
			.auth()
			.currentUser.getIdToken(/* forceRefresh */ true)
			.then(function (idToken) {
				sessionStorage.setItem('token', idToken);
			})
			.catch(function (error) {
				// Handle error
			});
	};

	return (
		<div>
			<Header />
			<button onClick={googleSignIn}>Google Signin</button>
		</div>
	);
};

export default Login;
