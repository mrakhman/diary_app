import React from 'react';
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../store/actions/authActions";

const SignedInLinks = (props) => {
	return (
		<div className="menu">
			<ul className="no-decoration">
				<li className="no-decoration"><NavLink className="nav-menu" to="/new_post">New post</NavLink></li>
				<li className="no-decoration"><NavLink className="nav-menu" to="/all_posts">All posts</NavLink></li>
				<li className="no-decoration"><a className="nav-menu logout" onClick={props.Logout}>Logout</a></li>
			</ul>
			{props.profile ? <small className="hello">Hello, {props.profile.firstName}!</small> : null}
		</div>
	)
};

const mapDispatchToProps = (dispatch) => {
	return {
		Logout: () => dispatch(logout())
	}
};

export default connect(null, mapDispatchToProps)(SignedInLinks)
