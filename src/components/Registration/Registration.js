import React, { useContext, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { userContext } from '../../App';

import fakeData from '../../fakeData/fakeData';
import './Registration.css';
import LogoHeader from '../Header/LogoHeader';

const Registration = () => {
	const [loggedInUser, setLoggedInUser] = useContext(userContext);
	const { id } = useParams();
	const history = useHistory();

	const selectedOpt = fakeData.find((chooseOpt) => chooseOpt.id === parseInt(id));
	const [registration, setRegistration] = useState({
		name: loggedInUser.name,
		email: loggedInUser.email,
		date: '',
		desc: '',
		chooseOpt: selectedOpt.name,
	});

	const handleChange = (e) => {
		const newRegistration = { ...registration };
		newRegistration[e.target.name] = e.target.value;
		setRegistration(newRegistration);
	};

	const handleSubmit = (e) => {
		fetch('https://immense-woodland-55916.herokuapp.com/registered', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(registration),
		});
		history.replace('/volunteerList');
		e.preventDefault();
	};
	return (
		<div>
			<LogoHeader />
			<h3 className="text-center">Registration</h3>
			<div className="container">
				<div className="registration-section">
					<form onSubmit={handleSubmit} method="post">
						<div className="form-group">
							<input type="text" name="name" className="form-control" id="name" onBlur={handleChange} value={loggedInUser.name} />
						</div>
						<div className="form-group">
							<input type="email" className="form-control" name="email" id="email" onBlur={handleChange} value={loggedInUser.email} />
						</div>
						<div className="form-group">
							<input type="date" name="date" className="datepicker" id="date" onBlur={handleChange} required />
						</div>
						<div className="form-group">
							<input type="text" name="desc" className="form-control" id="desc" onBlur={handleChange} required />
						</div>
						<div className="form-group">
							<input type="text" name="chooseOpt" className="form-control" id="chooseOpt" value={selectedOpt.name} onBlur={handleChange} />
						</div>
						<button className="btn btn-primary" type="submit">
							Submit
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Registration;
