import firebase from 'firebase';
// import firestore from 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyCYJ2oXRWjVTBTvpQxdStXOugVHw11STNA",
    authDomain: "diary-639c1.firebaseapp.com",
    databaseURL: "https://diary-639c1.firebaseio.com",
    projectId: "diary-639c1",
    storageBucket: "diary-639c1.appspot.com",
    messagingSenderId: "625154214246",
    appId: "1:625154214246:web:0f4ea70867ca7eb7"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp


