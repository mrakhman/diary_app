import React from 'react';
import firebaseApp from '../firebase/init';
import PostCard from "./PostCard";

class Posts extends React.Component {
    state = {
        posts: []
    };

    getPosts = () => {
        let ref = firebaseApp.database().ref('/');
        ref.on('value', snapshot => {
            let posts = snapshot.val();
            posts = Object.values(posts);
            this.setState({posts: posts});
        });
    };

    listOfPosts = () => {
        if (this.state.posts.length === 0)
            return <p> No posts! </p>;
        else
            return <PostCard posts={this.state.posts}/>
    };

    componentDidMount() {
    	this.getPosts();
    }
    render() {
        return (
            <div className='all_posts main'>
                <div className="row" >
                    {this.listOfPosts()}
                </div>
            </div>
        );
    }
}
export default Posts;
