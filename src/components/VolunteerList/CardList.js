import React from 'react';
import fakeData from '../../fakeData/fakeData';

const CardList = (props) => {
	const userInfo = props.userInfo;
	const getPhoto = fakeData.filter((fd) => fd.name.toLowerCase() === userInfo.chooseOpt.toLowerCase());
	console.log(getPhoto);
	return (
		<div className="col-md-3 " id="delete" style={{ marginTop: '25px' }}>
			{getPhoto.map((gphoto) => {
				return (
					<div className="col">
						<img src={gphoto.photo} style={{ width: '70%' }} />
					</div>
				);
			})}

			<div className="col">
				<h6>Event Name: {userInfo.chooseOpt}</h6>
				<p>Date:{userInfo.date}</p>
			</div>
			<button style={{ padding: '8px 40px' }} className="btn btn-danger" onClick={(e) => props.handleCancel(e, `${userInfo._id}`)}>
				Cancel
			</button>
		</div>
	);
};

export default CardList;
