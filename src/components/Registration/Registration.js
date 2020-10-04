import React, { useContext, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { userContext } from '../../App';
import Header from '../Header/Header';
import fakeData from '../../fakeData/fakeData';

const Registration = () => {
	const [loggedInUser, setLoggedInUser] = useContext(userContext);
	const { id } = useParams();
	const history = useHistory();

	const selectedOpt = fakeData.find((chooseOpt) => chooseOpt.id === parseInt(id));
	const [registration, setRegistration] = useState({
		name: '',
		email: '',
		date: '',
		desc: '',
		chooseOpt: '',
	});

	const handleChange = (e) => {
		const newRegistration = { ...registration };
		newRegistration[e.target.name] = e.target.value;
		setRegistration(newRegistration);
	};

	const handleSubmit = (e) => {
		fetch('http://localhost:5000/registered', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(registration),
		});
		history.push('/volunteerList');
		e.preventDefault();
	};
	return (
		<div>
			<Header />
			<div className="container">
				<h1>Registration</h1>
				<form onSubmit={handleSubmit} method="post">
					<input type="text" name="name" id="name" onBlur={handleChange} />
					<input type="email" name="email" id="email" onBlur={handleChange} />
					<input type="date" name="date" id="date" onBlur={handleChange} />
					<input type="text" name="desc" id="desc" onBlur={handleChange} />
					<input type="text" name="chooseOpt" id="chooseOpt" value={selectedOpt.name} onBlur={handleChange} />
					<button type="submit">Submit</button>
				</form>
			</div>
		</div>
	);
};

export default Registration;
