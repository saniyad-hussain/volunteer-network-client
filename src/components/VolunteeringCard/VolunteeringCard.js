import React from 'react';

const VolunteeringCard = (props) => {
	const volunteerOpt = props.vlc;
	return (
		<div className="col-md-3">
			<div className="card" style={{ width: '18rem' }}>
				<img src={volunteerOpt.photo} className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{volunteerOpt.name}</h5>
				</div>
			</div>
		</div>
	);
};

export default VolunteeringCard;
