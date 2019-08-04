import React from 'react';
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../store/actions/authActions";

const SignedInLinks = (props) => {
	return (
		<div className="menu-div">
			<ul className="no-decoration">
				<li className="no-decoration"><NavLink className="nav-tab" to="/new_post">New post</NavLink></li>
				<li className="no-decoration"><NavLink className="nav-tab" to="/all_posts">All posts</NavLink></li>
			</ul>
			<div>
				{props.profile.firstName ? <small className="hello">Hello, {props.profile.firstName}!</small> : null}
			</div>
			<div>
				<button className="logout" onClick={props.Logout}>Logout</button>
			</div>
		</div>

	)
};

const mapDispatchToProps = (dispatch) => {
	return {
		Logout: () => dispatch(logout())
	}
};

export default connect(null, mapDispatchToProps)(SignedInLinks)
