import React from 'react';
// import firebaseApp from '../firebase/init';
import PostCard from "./PostCard";
import { connect } from 'react-redux';
import { firestoreConnect } from "react-redux-firebase";
import { compose } from 'redux';
import {Redirect} from "react-router-dom";

class AllPosts extends React.Component {
    state = {
        // posts: [],
        selected_tag: "all",
        tags: [
            {id : 0, text: "all"},
            {id : 1, text: "#happy_day"},
            {id : 2, text: "#sad_day"},
            {id : 3, text: "#boring_day"},
            {id : 4, text: "#crazy_day"}
        ]
    };

    // getPosts = () => {
    //     let all_posts = [];
    //     let ref = firebaseApp.database().ref('/');
    //     ref.orderByChild("date").on('value', snapshot => {
    //         snapshot.forEach(function(childSnapshot) {
    //             let post = childSnapshot.val();
    //             // Use array.unshift(new_element) instead of array.push(new_element) to get descending order of posts
    //             all_posts.unshift(post);
    //         });
    //         this.setState({posts: all_posts});
    //         // this.setState({_posts: all_posts});
    //     });
    // };


    // Redux ListOfPosts
    listOfPosts = () => {
        const {posts} = this.props;
        if (posts.length === 0)
            return <p> No posts! </p>;
        else
            return <PostCard posts={posts}/>
    };

    // No Redux ListOfPosts
    // listOfPosts = () => {
    //     if (this.state.posts.length === 0)
    //         return <p> No posts! </p>;
    //     else
    //         return <PostCard posts={this.state.posts}/>
    // };

    selectTag = (e) => {
        this.getPosts();
        this.setState({selected_tag: e.target.value});
        this.filterPosts(e.target.value);
    };

    filterPosts = (tag_selected) => {
        // this.setState({posts: this._posts});
        if (tag_selected === 'all') {
            console.log("all posts");
        }
        else {
            var filtered_posts = this.state.posts;
            console.log(filtered_posts);
            filtered_posts = filtered_posts.filter(function (post) {
                return post.tag === tag_selected;
            });
            console.log(filtered_posts);
            this.setState({posts: filtered_posts})
        }
    };

    // filterPosts2 = (tag) => {
    //     if (this.state.selected_tag === 'all') {
    //         this.getPosts();
    //     }
    //     else {
    //         let filter_posts = [];
    //         let ref = firebaseApp.database().ref('/');
    //         ref.orderByChild("tag").equalTo(tag).on('child_added', snapshot => {
    //             snapshot.forEach(function(childSnapshot) {
    //                 console.log(childSnapshot.val());
    //                 let post = childSnapshot.val();
    //                 filter_posts.unshift(post);
    //             });
    //             this.setState({posts: filter_posts});
    //         });
    //     }
    // };

    componentDidMount() {
    	// this.getPosts();
    }

    render() {
        const selectOptions = this.state.tags.map(tag => {
            return (
                <option key={tag.id}>{tag.text}</option>
            )
        });
        const {auth} = this.props;
        if (!auth.uid) return <Redirect to="/login" />;

        return (
            <div className='all_posts main'>
                <h3>My posts</h3>
                <h2>{this.state.selected_tag}</h2>
                <select id="select-tag" value={this.state.selected_tag} onChange={this.selectTag}>
                    {selectOptions}
                </select>
                <div className="cards-list">
                    {this.listOfPosts()}
                </div>
            </div>
        );
    }
}


// Redux map state
const mapStateToProps = (state) => {
    return {
        // posts: state.project.posts_test
        posts: state.firestore.ordered.posts || state.project.posts_test,
        auth: state.firebase.auth
    }
};

// Redux connect is a function which returns higher order component to take in AllPosts
// export default connect(mapStateToProps)(AllPosts);
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'posts'}
    ])
    )(AllPosts);
