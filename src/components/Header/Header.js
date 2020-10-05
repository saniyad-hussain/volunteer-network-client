import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import './Header.css';

const Header = () => {
	const [loggedInUser, setloggedInUser] = useContext(userContext);
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container">
					<Link to="/">
						<a className="navbar-brand">
							<img src={`${process.env.PUBLIC_URL}/assets/logos/Group-1329.png`} alt="" />
						</a>
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav ml-auto">
							<li className="nav-item active">
								<Link to={'/'}>
									<a className="nav-link" href="#">
										Home <span className="sr-only">(current)</span>
									</a>
								</Link>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Donation
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Events
								</a>
							</li>

							<li className="nav-item">
								<a className="nav-link" href="#">
									<strong>{loggedInUser.name}</strong>
								</a>
							</li>
							<li className="nav-item">
								{loggedInUser.isLoggedIn ? (
									<button className="btn btn-primary" onClick={() => setloggedInUser('')}>
										Logout
									</button>
								) : (
									<Link to={'/login'}>
										<button className="btn btn-success">Login</button>
									</Link>
								)}
							</li>
							<li className="nav-item">
								<Link to={'/dashboard'}>
									<button className="btn btn-primary adminBtn" style={{ marginLeft: '10px' }}>
										Admin
									</button>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<div className="banner d-flex justify-content-center align-items-center">
				<div className="banner-info d-flex justify-content-center">
					<div className="headline">
						<h1>I Grow By Helping People In Need</h1>
						<input className="form-control" type="text" />
						<button style={{ padding: '10px 60px', margin: '10px 0' }} className="btn btn-primary">
							Search
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
