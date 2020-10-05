import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Volunteering.css';

const VolunteeringCard = (props) => {
	const volunteerOpt = props.vlc;

	return (
		<div className="col-md-3">
			<div className="card">
				<img src={volunteerOpt.photo} className="card-img-top" alt="..." />
				<div className="card-body">
					<Link to={`/registration/${volunteerOpt.id}`}>
						<h5 className="card-title">{volunteerOpt.name}</h5>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default VolunteeringCard;
