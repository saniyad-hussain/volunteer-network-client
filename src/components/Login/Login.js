import React, { useContext } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebase.config';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
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
				history.replace(from);
			})
			.catch((error) => {});
	};

	return (
		<div>
			{loggedInUser.name}
			<button onClick={googleSignIn}>Google Signin</button>
		</div>
	);
};

export default Login;
