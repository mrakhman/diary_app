import React from 'react';
import firebaseApp from '../firebase/init';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import uuid from "uuid";


class CreatePost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {title: null, text: null, date: null};
    }

    sendPost = () => {
        let id = uuid.v4();
        let now = Date.now();
        firebaseApp.database().ref(id).set({
            title: this.state.title,
            text: this.state.text,
            date: now,
        }).then(() => {
            this.setState({title: null, text: null, date: null});
            NotificationManager.success('New post created', 'Success!');
        }).catch(() => {
            NotificationManager.warning('There was an error creating this post', 'Error!');
        })
    };

    render () {
        return (
            <div className='create_post main'>
                <div className="row">
                    <div className="col-lg-6">
	                    <div className="form-group">
	                        <label htmlFor="title">Title</label>
	                        <input onChange={(e) => {this.setState({title: e.target.value})}} type="text" className="form-control" id="title" placeholder="enter post title"/>
	                    </div>
	                    <div className="form-group">
	                        <label htmlFor="text">Text</label>
	                        <textarea onChange={(e) => {this.setState({text: e.target.value})}} className="form-control" id="text" rows="3" placeholder="enter post text">
	                        </textarea>
	                    </div>
	                    <NotificationContainer/>
	                    <button type="submit" className="btn btn-primary" onClick={this.sendPost}>Submit</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default CreatePost;
