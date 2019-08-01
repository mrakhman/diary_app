import React from 'react';
import PostDetails from './components/PostDetails';
import CreatePost from './components/CreatePost';
import Navbar from './components/layout/Navbar';
import Posts from './components/AllPosts';
import Home from './components/Home';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
// import firebaseApp from './firebase/init';
// import db from './firebase/init';


class App extends React.Component {
	state = {

	};

	render(){
		return (
			<Router>
				<div className="App">
					<header className="App-header">
						<Navbar/>
						<Switch>
							<Route path="/" exact component={Home}/>
							<Route path="/login" exact component={Login}/>
							<Route path="/register" exact component={Register}/>
							<Route path="/all_posts" exact component={Posts}/>
							<Route path="/new_post" exact component={CreatePost}/>
							<Route path="/post/:id" component={PostDetails}/>
						</Switch>
					</header>
				</div>
			</Router>
		);
	}
}

export default App;
