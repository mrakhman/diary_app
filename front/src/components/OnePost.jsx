import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import {connect} from 'react-redux'
import { deletePost } from "../actions/postActions";

class OnePost extends React.Component {
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
        return (
            <div className='post main'>
                <Moment className="date" format="YYYY-MM-DD, HH:mm">{this.props.post.date}</Moment>
                {this.ifHasTag()}
                <h3>{this.props.post.title}</h3>
                <p>{this.props.post.text}</p>
                <button className="delete" onClick={this.handleDelete}>Delete Post</button>
            </div>
        );
    }
}


// We want to get data from individual post
const mapStateToProps = (state, ownProps) => {
    // id from App.js from Route tag of {OnePost}
    let id = ownProps.match.params.id;
    return {
        // Loop through the posts and find post which id matches id set above. Return this post
        post: state.posts_test.find((post) => post.id.toString() === id)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        // deletePost: (id) => { dispatch({type: 'DELETE_POST', id: id}) }
        deletePost: (id) => { dispatch(deletePost(id)) }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(OnePost);
