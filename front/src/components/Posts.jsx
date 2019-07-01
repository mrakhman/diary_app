import React from 'react';
import firebaseApp from '../firebase/init';
import PostCard from "./PostCard";

class Posts extends React.Component {
    state = {
        posts: {}
    };

    getPosts = () => {
        let ref = firebaseApp.database().ref('/');
        ref.on('value', snapshot => {
            const posts = snapshot.val();
            this.setState({posts: posts});
            // console.log(posts);
        });
    };

    renderPosts = () => {
    	if (this.state.posts.length === 0)
    		return <p> No posts! </p>;
        const items = [];

        for (let postID in this.state.posts) {
            items.push(<PostCard post={this.state.posts[postID]} key={postID} id={postID}/>)
        }
    	return <div className="card-group">{items}</div>;
    };

    componentDidMount() {
    	this.getPosts();
    }
    render () {
        return (
            <div className='all_posts main'>
                <div className="row" >
                    {this.renderPosts()}
                </div>
            </div>
        );
    }
}
export default Posts;
