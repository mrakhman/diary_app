import React from 'react';
import OnePost from './components/OnePost';
import CreatePost from './components/CreatePost';
import Header from './components/Header';
import Posts from './components/Posts';
import Home from './components/Home';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
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
							<Route path="/" exact component={Home}/>
							<Route path="/all_posts" exact component={Posts}/>
							<Route path="/new_post" exact component={CreatePost}/>
							<Route path="/post/:id" component={OnePost}/>
						</Switch>
					</header>
				</div>
			</Router>
		);
	}

}

export default App;
