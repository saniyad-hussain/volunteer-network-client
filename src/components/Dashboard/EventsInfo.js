import React from 'react';

const EventsInfo = (props) => {
	return (
		<tbody>
			<tr>
				<th scope="row">{props.user._id}</th>
				<td>{props.user.name}</td>
				<td>{props.user.email}</td>
				<td>{props.user.date}</td>
				<td>{props.user.chooseOpt}</td>
				<td>
					<button className="btn btn-danger" onClick={(e) => props.handleDelete(e, `${props.user._id}`)}>
						Delete
					</button>
				</td>
			</tr>
		</tbody>
	);
};

export default EventsInfo;
