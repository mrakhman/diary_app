import React from 'react';
import { connect} from "react-redux";
import {login } from "../../store/actions/authActions";
import {Redirect} from "react-router-dom";

class Login extends React.Component {
	state = {
		email: '',
		password: ''
	};

	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.Login(this.state)
	};

	render() {
		const {authError, auth} = this.props;
		if (auth.uid) return <Redirect to="/" />;

		return (
			<div className="main">
				<h3>Login</h3>
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="email">Email</label>
					<input type="email" id="email" onChange={this.handleChange}/>
					<label htmlFor="password">Password</label>
					<input type="password" id="password" onChange={this.handleChange}/>
					<button type="submit">Submit</button>
					<div>
						{authError ? <p className="red_color">{authError}</p> : null}
					</div>
				</form>
			</div>
		)
	}

}

const mapStateToProps = (state) => {
	return {
		authError: state.auth.authError,
		auth: state.firebase.auth
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		Login: (creds) => dispatch(login(creds))
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
