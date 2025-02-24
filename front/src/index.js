import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import 'bootstrap/dist/css/bootstrap.css';
import 'react-notifications/lib/notifications.css';

// Redux
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers/rootReducer';
import thunk from 'redux-thunk';

// Firebase + Firestore
import { reduxFirestore, getFirestore} from "redux-firestore";
import { reactReduxFirebase, getFirebase} from "react-redux-firebase";
import firebaseInit from './firebase/firebaseInit';

const store = createStore(rootReducer,
	compose(
		applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
		reduxFirestore(firebaseInit),
		reactReduxFirebase(firebaseInit, {useFirestoreForProfile: true, userProfile: 'users', attachAuthIsReady: true})
	)
);

store.firebaseAuthIsReady.then(() => {
	ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
	serviceWorker.unregister();
});


