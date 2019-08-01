import React from 'react';

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
		console.log(this.state);
	};

	render() {
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
				</form>
			</div>
		)
	}

}

export default Register;
