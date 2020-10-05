import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LogoHeader from '../Header/LogoHeader';
import EventsInfo from './EventsInfo';
import './Dashboard.css';

const Dashboard = () => {
	const [registerUsers, setRegisterUsers] = useState([]);
	useEffect(() => {
		fetch('http://localhost:5000/dashboard')
			.then((res) => res.json())
			.then((data) => setRegisterUsers(data));
	}, []);
	const handleDelete = (e, id) => {
		e.persist();
		fetch(`http://localhost:5000/cancel/${id}`, {
			method: 'DELETE',
		})
			.then((res) => res.json())
			.then((result) => {
				if (result) {
					e.target.parentNode.style.display = 'none';
				}
			});
	};
	return (
		<div>
			<LogoHeader />
			<div className="container">
				<div className="buttonArea">
					<Link to={'/dashboard'}>
						<button className="btn btn-primary " style={{ margin: '10px' }}>
							Dashboard
						</button>
					</Link>
					<Link to={'/addevent'}>
						<button className="btn btn-primary adminBtn">Add Event</button>
					</Link>
				</div>
				<table class="table">
					<thead>
						<tr>
							<th scope="col">ID</th>
							<th scope="col">Name</th>
							<th scope="col">Email</th>
							<th scope="col">Registaring Date</th>
							<th scope="col">Volunteer List</th>
							<th scope="col">Action</th>
						</tr>
					</thead>
					{registerUsers.map((user) => (
						<EventsInfo user={user} handleDelete={handleDelete}></EventsInfo>
					))}
				</table>
			</div>
		</div>
	);
};

export default Dashboard;
