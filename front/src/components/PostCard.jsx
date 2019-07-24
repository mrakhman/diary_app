import React from 'react';
import {Link} from "react-router-dom";


function PostCard(props) {
	return  <div className="col-sm-3 m-1">
				<div className="card" style={{width: 18+'rem'}}>
					<div className="card-body">
						<h5 className="card-title">{props.post.title}</h5>
						<p className="card-text">{props.post.text}</p>
						<Link to={{
							pathname: `/post/${props.id}`,
							state: [{title: props.post.title, text: props.post.text, date: props.post.date, tag: props.post.tag}]
						}}><button className="btn btn-primary">Open</button></Link>
                        {/*<button onClick={() => {deletePost(props.post.id)}}>Delete</button>*/}
					</div>
				</div>
			</div>;
}

export default PostCard
