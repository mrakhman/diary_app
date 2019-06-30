import React from 'react';

function PostCard(props) {
	return  <div className="col-sm-3">
				<div className="card" style={{width: 18+'rem'}}>
					<div className="card-body">
						<h5 className="card-title">{props.post.title}</h5>
						<p className="card-text">{props.post.text}</p>
						<a href="#" className="btn btn-primary">Go somewhere</a>
					</div>
				</div>
			</div>;
}

export default PostCard
