import React from 'react';
import { Link } from 'react-router-dom';

const ShowEvents = (props) => {
	return (
		<div className="col-md-3">
			<div className="card">
				<div className="card-body">
					<Link to={`/`}>
						<h5 className="card-title">{props.event.name}</h5>
						<small>{props.event.date}</small>
						<p>{props.event.desc}</p>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ShowEvents;
