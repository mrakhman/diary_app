import React from 'react';
import firebaseApp from '../firebase/init';
import uuid from "uuid";

const API_URL = 'http://localhost:5000/';


class CreatePost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {title: null, text: null, date: null};
    }

    // submitPost = (e) => {
    //     e.preventDefault();
    //
    //     axios.post(`${API_URL}/posts/create`, {
    //         gender: this.user_details.gender,
    //         sex_pref: this.user_details.sex_pref,
    //         bio_text: this.user_details.bio_text,
    //         profile_image: this.user_details.profile_image,
    //         dob: this.user_details.dob,
    //         tags: this.user_details.tags
    //         })
    //         .then(response => {
    //             if(response.status === 200) {
    //                 // this.$notify({group: 'foo', type: 'success', title: 'Saved!', text: 'personal details are updated', duration: -1})
    //             }
    //             console.log(response)
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    // };

    // submitPosts = () => {
    //     let ref = firebaseApp.database().ref('/');
    //     ref.on('value', snapshot => {
    //         const posts = snapshot.val();
    //         this.setState(posts);
    //         console.log(posts);
    //     });
    // };


    sendPost = () => {
        let id = uuid.v4();
        let now = Date.now();
        firebaseApp.database().ref(id).set({
            title: this.state.title,
            text: this.state.text,
            date: now,
        }).then(() => {
            console.log("All bien!")
        }).catch(() => {
            console.log("Error blyad")
        })
    };


    render () {
        return (
            <div className='create_post main'>
                {/*<form onSubmit={this.sendPost}>*/}
                {/*<form>*/}
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input onChange={(e) => {this.setState({title: e.target.value})}} type="text" className="form-control" id="title" placeholder="enter post title"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="text">Text</label>
                        <textarea onChange={(e) => {this.setState({text: e.target.value})}} className="form-control" id="text" rows="3" placeholder="enter post text">
                        </textarea>
                    </div>
                    {/*<div className="form-group">*/}
                    {/*    <label htmlFor="date">Date</label>*/}
                    {/*    <input onChange={(e) => {this.setState({date: e.target.value})}} className="form-control" type="date" id="date"/>*/}
                    {/*</div>*/}
                    <button type="submit" className="btn btn-primary" onClick={this.sendPost}>Submit</button>
                {/*</form>*/}
            </div>
        );
    }
}
export default CreatePost;
