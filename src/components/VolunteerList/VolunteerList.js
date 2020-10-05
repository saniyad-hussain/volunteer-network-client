import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';
import Header from '../Header/Header';

const VolunteerList = () => {
	const [userArea, setUserArea] = useState([]);
	const [loggedInUser, setloggedInUser] = useContext(userContext);
	useEffect(() => {
		fetch(`http://localhost:5000/showlist?email=${loggedInUser.email}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				authorization: `Bearer ${sessionStorage.getItem('token')}`,
			},
		})
			.then((res) => res.json())
			.then((data) => setUserArea(data));
	}, []);
	const handleCancel = (id) => {
		fetch(`http://localhost:5000/cancel/${id}`, {
			method: 'DELETE',
		}).then((res) => res.json());
	};
	return (
		<div>
			<Header />
			<div className="container">
				{userArea.map((userInfo) => (
					<li>
						{userInfo.name}, {userInfo.email},{userInfo.date}, <button onClick={() => handleCancel(`${userInfo._id}`)}>Cancel</button>
					</li>
				))}
			</div>
		</div>
	);
};

export default VolunteerList;
