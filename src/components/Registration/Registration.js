import React, { useContext } from 'react';
import { userContext } from '../../App';

const Registration = () => {
	const [loggedInUser, setLoggedInUser] = useContext(userContext);
	return (
		<div>
			{loggedInUser.name}
			<h1>Registration</h1>
		</div>
	);
};

export default Registration;
