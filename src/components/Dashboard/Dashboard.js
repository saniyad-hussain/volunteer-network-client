import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

const Dashboard = () => {
	const [registerUsers, setRegisterUsers] = useState([]);
	useEffect(() => {
		fetch('http://localhost:5000/dashboard')
			.then((res) => res.json())
			.then((data) => setRegisterUsers(data));
	}, []);
	const handleDelete = (id) => {
		fetch(`http://localhost:5000/cancel/${id}`, {
			method: 'DELETE',
		}).then((res) => res.json());
	};
	return (
		<div>
			<Header />
			<div className="container">
				{registerUsers.map((user) => (
					<li>
						{user.name} <button onClick={() => handleDelete(`${user._id}`)}>Delete</button>
					</li>
				))}
			</div>
		</div>
	);
};

export default Dashboard;
