import React from 'react';
import axios from 'axios';
import OnePost from './components/OnePost';
import CreatePost from './components/CreatePost';
import Header from './components/Header';
import Posts from './components/Posts';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import firebaseApp from './firebase/init';
// import db from './firebase/init';


// const API_URL = 'http://localhost:5000/';

class App extends React.Component {
	state = {
		posts: [
			// {id: null, title: '', text: '', date: ''}
		]
	};

	getPosts = () => {
		let ref = firebaseApp.database().ref('/');
		ref.on('value', snapshot => {
			const posts = snapshot.val();
			this.setState(posts);
			console.log(posts);
		});
	};

	renderPosts() {
		if (this.state.posts.length === 0)
			return <p> No posts! </p>;
		return <ul>
			{this.state.posts.map(post => <li key={post.id}>{post}</li>)}
		</ul>
	}

	// componentDidMount() {
	// 	this.getPosts();
	// }

	render(){
		return (
			<Router>
				<div className="App">
					<header className="App-header">
						<Header/>
						<Switch>
							<Route path="/" exact component={Posts}/>
							<Route path="/all_posts" exact component={Posts}/>
							<Route path="/new_post" component={CreatePost}/>
							<Route path="/post:id" component={OnePost}/>
						</Switch>
					</header>
					<div className="main">
						{/*{this.renderPosts()}*/}
						{/*<OnePost/>*/}
						{/*<CreatePost/>*/}
					</div>
				</div>
			</Router>
		);
	}

}

export default App;
