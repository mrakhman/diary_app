import React from 'react';
import firebaseApp from '../firebase/init';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import uuid from "uuid";


class CreatePost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {title: '',
            text: '',
            date: '',
            my_tag: "#happy_day",
            tags: [
                {id : 1, text: "#happy_day"},
                {id : 2, text: "#sad_day"},
                {id : 3, text: "#boring_day"},
                {id : 4, text: "#crazy_day"}
            ]
        };
    }

    sendPost = (e) => {
        e.preventDefault();
        if (this.state.title && this.state.text) {
            let id = uuid.v4();
            let now = Date.now();
            firebaseApp.database().ref(id).set({
                title: this.state.title,
                text: this.state.text,
                date: now,
                tag: this.state.my_tag
            }).then(() => {
                this.setState({title: '', text: '', date: ''});
                NotificationManager.success('New post created', 'Success!');
            }).catch(() => {
                NotificationManager.warning('There was an error creating this post', 'Error!');
            })
        }
        else
            NotificationManager.warning('Post must have title and text', 'Oops!');
    };

    selectTag = (e) => {
        this.setState({my_tag: e.target.value});
    };

    handleInputChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };

    render () {
        // const {tags} = this.state;
        const selectOptions = this.state.tags.map(tag => {
            return (
                <option key={tag.id}>{tag.text}</option>
            )
        });

        return (
            <div className='create_post main'>
                <h3>Create new post</h3>
                <div className="row">
                    <div className="col-lg-6">
                        <form onSubmit={this.sendPost}>
                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <input
                                    onChange={this.handleInputChange}
                                    type="text"
                                    className="form-control"
                                    id="title"
                                    placeholder="enter post title"
                                    value={ this.state.title}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="text">Text</label>
                                <textarea
                                    onChange={this.handleInputChange}
                                    className="form-control"
                                    id="text"
                                    rows="3"
                                    placeholder="enter post text"
                                    value={ this.state.text}
                                >
                                </textarea>
                            </div>
                            <select id="select-tag" value={this.state.my_tag} onChange={this.selectTag}>
                                {selectOptions}
                            </select>
                            <NotificationContainer/>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default CreatePost;
