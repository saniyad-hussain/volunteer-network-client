import React, { useState } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import LogoHeader from '../Header/LogoHeader';

const Events = () => {
	const [events, setEvents] = useState({
		name: '',
		date: '',
		desc: '',
	});

	const handleBlur = (e) => {
		const newEvent = { ...events };
		newEvent[e.target.name] = e.target.value;
		setEvents(newEvent);
	};
	const history = useHistory();
	const addEvent = (e) => {
		fetch('https://immense-woodland-55916.herokuapp.com/addevent', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(events),
		});
		history.replace('/');
		e.preventDefault();
	};
	return (
		<div className="container">
			<LogoHeader />
			<div className="buttonArea">
				<Link to={'/dashboard'}>
					<button className="btn btn-primary adminBtn" style={{ margin: '10px' }}>
						Dashboard
					</button>
				</Link>
				<Link to={'/addevent'}>
					<button className="btn btn-primary adminBtn">Add Event</button>
				</Link>
			</div>
			<form onSubmit={addEvent} method="post" onBlur={handleBlur}>
				<div className="form-group">
					<input type="text" className="form-control" name="name" id="name" onBlur={handleBlur} placeholder="Event Name" required />
				</div>
				<div className="form-group">
					<input type="date" name="date" className="form-control" id="date" onBlur={handleBlur} placeholder="Date" required />
				</div>
				<div className="form-group">
					<input type="text" name="desc" id="desc" className="form-control" onBlur={handleBlur} placeholder="Description" required />
				</div>
				<button className="btn btn-success" type="submit">
					Add Event
				</button>
			</form>
		</div>
	);
};

export default Events;
