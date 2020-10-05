import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Group-1329.png';

const LogoHeader = () => {
	return (
		<div className="logo-section d-flex justify-content-center">
			<div className="logo">
				<Link to="/">
					<img src={logo} alt="" />
				</Link>
			</div>
		</div>
	);
};

export default LogoHeader;
