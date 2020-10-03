import React from 'react';
import Header from '../Header/Header';
import VolunteeringCard from '../VolunteeringCard/VolunteeringCard';
import fakeData from '../../fakeData/fakeData';

const Home = () => {
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
		</div>
	);
};

export default Home;
