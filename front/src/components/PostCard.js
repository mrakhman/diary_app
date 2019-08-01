import React from 'react';
import {Link} from "react-router-dom";

class PostCard extends React.Component {
	limitText = (text, maxLen) => {
		if (text && text.length > maxLen) {
			return text.substring(0, maxLen) + '...';
		}
		return text
	};

	render() {
		const { posts } = this.props;
		const postList = posts.map(post => {
			return (
				<div className="card" key={post.date} >
					<div className="card-body">
						<small>{post.tag}</small>
						<h4>{this.limitText(post.title, 80)}</h4>
						<p>{this.limitText(post.text, 160)}</p>
						<Link to={{
							// pathname: `/post/${this.props.id}`, // No Redux id
							pathname: `/post/${post.id}`, // Redux id
							state: [{title: post.title, text: post.text, date: post.date, tag: post.tag}]
						}}>
							<button className="btn btn-primary">Open</button>
							{/*<button onClick={() => {deletePost(props.post.id)}}>Delete</button>*/}
						</Link>
					</div>
				</div>
			)
		});
		return (
			<div className="col-sm-3 m-1">
				{ postList }
			</div>
		);
	}
}

export default PostCard
