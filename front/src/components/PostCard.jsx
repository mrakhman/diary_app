import React from 'react';
import {Link} from "react-router-dom";

class PostCard extends React.Component {
	limitText = (text, maxLen) => {
		if (text.length > maxLen) {
			return text.substring(0, maxLen) + '...';
		}
		return text
	};

	render() {
		const { posts } = this.props;
		const postList = posts.map(post => {
			return (
				<div className="post" key={post.date} style={{width: 18 + 'rem'}}>
					<div className="card-body">
						<h5 className="card-title">{this.limitText(post.title, 80)}</h5>
						<p className="card-text">{this.limitText(post.text, 160)}</p>
						<Link to={{
							pathname: `/post/${post.date}`,
							state: [{title: post.title, text: post.text}]
						}}>
							<button className="btn btn-primary">Open</button>
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