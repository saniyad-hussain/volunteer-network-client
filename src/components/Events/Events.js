import React, { useState } from 'react';

const Events = () => {
	const [events, setEvents] = useState({
		name: '',
		date: '',
		desc: '',
	});
	const [image, setImage] = useState('');
	const handleBlur = (e) => {
		const newEvent = { ...events };
		newEvent[e.target.name] = e.target.value;
		setEvents(newEvent);
		setImage(e.target.files[0]);
	};
	const addEvent = (e) => {
		fetch('http://localhost:5000/addevent', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(events, image),
		});
		e.preventDefault();
	};
	return (
		<div className="container">
			<form onSubmit={addEvent} method="post" onBlur={handleBlur}>
				<input type="text" name="name" id="name" onBlur={handleBlur} />
				<input type="date" name="date" id="date" onBlur={handleBlur} />
				<input type="text-area" name="desc" id="desc" onBlur={handleBlur} />
				<input type="file" name="image" id="banner" onBlur={handleBlur} />
				<button type="submit">Add Event</button>
			</form>
		</div>
	);
};

export default Events;
