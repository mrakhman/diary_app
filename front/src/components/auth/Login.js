import React from 'react';

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
		console.log(this.state);
	};

	render() {
		return (
			<div className="main">
				<h3>Login</h3>
				<form onSubmit={this.handleSubmit}>
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

export default Login;
