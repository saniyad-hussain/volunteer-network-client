import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import VolunteeringCard from '../VolunteeringCard/VolunteeringCard';
import fakeData from '../../fakeData/fakeData';
import ShowEvents from '../Events/ShowEvents';

const Home = () => {
	const [events, setEvents] = useState([]);
	useEffect(() => {
		fetch('http://localhost:5000/events')
			.then((res) => res.json())
			.then((data) => setEvents(data));
	}, []);
	return (
		<div>
			<Header />
			<div className="container">
				<div className="row">
					{fakeData.map((vlc) => (
						<VolunteeringCard vlc={vlc}></VolunteeringCard>
					))}
				</div>
			</div>
			<div className="container">
				<div className="row">
					{events.map((event) => (
						<ShowEvents event={event}></ShowEvents>
					))}
				</div>
			</div>
		</div>
	);
};

export default Home;
