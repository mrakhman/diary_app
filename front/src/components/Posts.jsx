import React from 'react';
import firebaseApp from '../firebase/init';
import PostCard from "./PostCard";

class Posts extends React.Component {
    state = {
        posts: []
    };

    getPosts = () => {
        var all_posts = [];
        let ref = firebaseApp.database().ref('/');
        ref.orderByChild("date").on('value', snapshot => {
            snapshot.forEach(function(childSnapshot) {
                var post = childSnapshot.val();
                // Use array.unshift(new_element) instead of array.push(new_element) to get descending order of posts
                all_posts.unshift(post);
            });
            this.setState({posts: all_posts});
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
                <h3>All posts</h3>
                <div className="cards-list">
                    {this.listOfPosts()}
                </div>
            </div>
        );
    }
}
export default Posts;
