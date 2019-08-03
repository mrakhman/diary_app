import React from 'react';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {register} from "../../store/actions/authActions";

class Register extends React.Component {
	state = {
		firstName: '',
		lastName: '',
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
		this.props.Register(this.state)
	};

	render() {
		const {auth, authError} = this.props;
		if (auth.uid) return <Redirect to="/" />;
		return (
			<div className="main">
				<h3>Register</h3>
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="firstName">First Name</label>
					<input type="text" id="firstName" onChange={this.handleChange}/>
					<label htmlFor="lastName">Last Name</label>
					<input type="text" id="lastName" onChange={this.handleChange}/>
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
		auth: state.firebase.auth,
		authError: state.auth.authError
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		Register: (newUser) => dispatch(register(newUser))
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
