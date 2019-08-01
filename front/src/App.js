import React from 'react';
import OnePost from './components/OnePost';
import CreatePost from './components/CreatePost';
import Header from './components/layout/Header';
import Posts from './components/Posts';
import Home from './components/Home';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
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
