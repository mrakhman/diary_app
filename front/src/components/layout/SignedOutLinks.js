import React from 'react';
import { NavLink } from "react-router-dom";

const SignedOutLinks = () => {
	return (
		<ul className="no-decoration right">
			<li className="no-decoration"><NavLink className="nav-tab" to="/login">Login</NavLink></li>
			<li className="no-decoration"><NavLink className="nav-tab" to="/register">Register</NavLink></li>
		</ul>
	)
};

export default SignedOutLinks
