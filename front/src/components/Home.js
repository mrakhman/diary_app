import React from 'react';
import { connect } from 'react-redux';
import PostCard from "./PostCard";
import {Redirect} from "react-router-dom";
import {compose} from "redux";
import {firestoreConnect} from "react-redux-firebase";

class Home extends React.Component {
	// state = {
	// 	post: {},
	// };

	// getPosts = () => {
	// 	let last_post = [];
	// 	let ref = firebaseApp.database().ref('/');
	// 	ref.orderByChild("date").limitToLast(1).on('value', snapshot => {
	// 		snapshot.forEach(function(childSnapshot) {
	// 			let post = childSnapshot.val();
	// 			last_post.unshift(post);
	// 		});
	// 		this.setState({post: last_post[0]});
	// 	});
	// };

	componentDidMount() {
		// this.getPosts();
	};

	// lastPost = () => {
	// 	if (this.state.post.length === 0)
	// 		return <p> No posts! </p>;
	// 	else
	// 		return (
	// 			<div className="last-post">
	// 				<small>{this.state.post.tag}</small>
	// 				<h4>{this.state.post.title}</h4>
	// 				<p>{this.state.post.text}</p>
	// 				<Link to={{
	// 					pathname: `/post/${this.props.id}`,
	// 					state: [{
	// 						title: this.state.post.title,
	// 						text: this.state.post.text,
	// 						date: this.state.post.date,
	// 						tag: this.state.post.tag
	// 					}]
	// 				}}>
	// 					<button className="btn btn-primary">Open</button>
	// 				</Link>
	// 			</div>
	// 		)
	// };

	lastPost = () => {
		const {posts, auth} = this.props;
		if (!auth.uid) return <Redirect to="/login" />;
		if (posts.length === 0)
			return <p> No posts yet! </p>;
		else
			return (
				<div className="cards-list">
					<PostCard posts={posts.slice(0, 1)}/>
				</div>
			)
	};

	render () {
		return (
			<div className='main'>
				<h3 className="ml-4">Hello, this is your last post:</h3>
				{this.lastPost()}
			</div>
		);
	}
}

// Redux map state
const mapStateToProps = (state) => {
	return {
		posts: state.firestore.ordered.posts || state.project.posts_test,
		auth: state.firebase.auth
	}
};

// Redux connect is a function which returns higher order component to take in AllPosts
export default compose(
	connect(mapStateToProps),
	firestoreConnect([
		{collection: 'posts', orderBy: ['date', 'desc']}
	])
)(Home);
