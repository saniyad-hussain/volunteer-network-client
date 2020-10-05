import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';
import Header from '../Header/Header';
import CardList from '../VolunteerList/CardList';

const VolunteerList = () => {
	const [userArea, setUserArea] = useState([]);
	const [loggedInUser, setloggedInUser] = useContext(userContext);
	useEffect(() => {
		fetch(`https://immense-woodland-55916.herokuapp.com/showlist?email=${loggedInUser.email}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				authorization: `Bearer ${sessionStorage.getItem('token')}`,
			},
		})
			.then((res) => res.json())
			.then((data) => setUserArea(data));
	}, []);
	const handleCancel = (e, id) => {
		e.persist();
		fetch(`https://immense-woodland-55916.herokuapp.com/cancel/${id}`, {
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
			<Header />
			<div className="container">
				<div className="row">
					{userArea.map((userInfo) => (
						<CardList userInfo={userInfo} handleCancel={handleCancel}></CardList>
					))}
				</div>
			</div>
		</div>
	);
};

export default VolunteerList;
