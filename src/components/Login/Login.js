import React, { useContext } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebase.config';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import google from '../../images/google.png';
import './Login.css';
import LogoHeader from '../Header/LogoHeader';
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
				const signInUser = { name: displayName, email, isLoggedIn: true };
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
		<div className="container ">
			<LogoHeader />
			<div className="login-section">
				<div className="login-title text-center">
					<h3>Login With</h3>
				</div>
				<div className="login-area d-flex justify-content-center">
					<button onClick={googleSignIn} className="google-login d-flex justify-content-center ">
						<div className="social-icon ">
							<img src={google} className="icons" alt="" />
						</div>
						<div className="social-text ">
							<p> Continue With Google</p>
						</div>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Login;
