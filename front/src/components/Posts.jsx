import React from 'react';
import OnePost from './OnePost'
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
            console.log(posts);
        });
    };

    renderPosts = () => {
    	if (this.state.posts.length === 0)
    		return <p> No posts! </p>;
        const items = [];

        for (let postID in this.state.posts) {
            items.push(<PostCard post={this.state.posts[postID]} />)
        }
    	return <div className="card-group">{items}</div>;
    };

    componentDidMount() {
    	this.getPosts();
    }
    render () {
        return (
            <div className='all_posts main'>
                <div class="row" >
                    {this.renderPosts()}
                </div>
                {/*<div className="card" style={{width: 18+'rem'}}>*/}
                {/*    <div className="card-body">*/}
                {/*        <h5 className="card-title">Card title</h5>*/}
                {/*        <p className="card-text">Some quick example text to build on the card title and make up the*/}
                {/*            bulk of the card's content.</p>*/}
                {/*        <a href="#" className="btn btn-primary">Go somewhere</a>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        );
    }
}
export default Posts;
