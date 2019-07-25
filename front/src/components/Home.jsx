import React from 'react';
import Posts from './Posts'

class Home extends React.Component {
	render () {
		return (
			<div className='main'>
				<h3 className="ml-4">Hello, these are your posts:</h3>
				<Posts/>
			</div>
		);
	}
}
export default Home;
