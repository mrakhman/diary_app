import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import { connect } from 'react-redux'
import { deletePost } from "../store/actions/postActions";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from 'redux';
import {Redirect} from "react-router-dom";

class PostDetails extends React.Component {
    // ifHasTag = () => {
    //     if (this.props.location.state[0].tag) {
    //         return <h4>Tag: {this.props.location.state[0].tag}</h4>
    //     }
    //     else
    //         return <h4>No tag</h4>
    // };

    ifHasTag = () => {
        if (this.props.post.tag) {
            return <h4>Tag: {this.props.post.tag}</h4>
        }
        else
            return <h4>No tag</h4>
    };

    ifHasDate = () => {
        if (this.props.post.date) {
            return <Moment className="date" format="YYYY-MM-DD, HH:mm">{this.props.post.date.toDate().toString()}</Moment>
        }
        else
            return <h4>No date</h4>
    };

    handleDelete = () => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/all_posts');
    };

    // render () {
    //     return (
    //         <div className='post main'>
    //             <Moment className="date" format="YYYY-MM-DD, HH:mm">{this.props.location.state[0].date}</Moment>
    //             {this.ifHasTag()}
    //             <h3>{this.props.location.state[0].title}</h3>
    //             <p>{this.props.location.state[0].text}</p>
    //         </div>
    //     );
    // }

    render () {
        console.log(this.props);
        const { post, auth } = this.props;
        if (!auth.uid) return <Redirect to="/login" />;

        if (post) {
            return (
                <div className='post main'>
                    {this.ifHasDate()}
                    {this.ifHasTag()}
                    <h3>{this.props.post.title}</h3>
                    <p>{this.props.post.text}</p>
                    <button className="delete" onClick={this.handleDelete}>Delete Post</button>
                </div>
            )
        }
        else {
            return (
                <div className='post main'>
                    <p>Loading project...</p>
                </div>
            )
        }

    }
}


// We want to get data from individual post
const mapStateToProps = (state, ownProps) => {
    // id from App.js from Route tag of {PostDetails}
    let id = ownProps.match.params.id;
    const posts = state.firestore.data.posts;
    const post = posts ? posts[id] : null;
    return {
        // Loop through the posts and find post which id matches id set above. Return this post
        // post: state.project.posts.find((post) => post.id.toString() === id)
        post: post,
        auth: state.firebase.auth
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        // deletePost: (id) => { dispatch({type: 'DELETE_POST', id: id}) }
        deletePost: (id) => { dispatch(deletePost(id)) }
    }
};

// export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        {collection: 'posts'}
    ])
)(PostDetails);
