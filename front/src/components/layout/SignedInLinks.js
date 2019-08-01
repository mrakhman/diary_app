import React from 'react';
import { NavLink } from "react-router-dom";

const SignedInLinks = () => {
	return (
		<ul className="no-decoration">
			<li className="no-decoration"><NavLink className="nav-menu" to="/new_post">New post</NavLink></li>
			<li className="no-decoration"><NavLink className="nav-menu" to="/all_posts">All posts</NavLink></li>
		</ul>
	)
};

export default SignedInLinks
