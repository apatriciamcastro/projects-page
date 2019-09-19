import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
	apiKey: "AIzaSyCOIuRvOmWqx4zmNKBMYsZXVLlt6tlXnxo",
	authDomain: "todo-ninja-53562.firebaseapp.com",
	databaseURL: "https://todo-ninja-53562.firebaseio.com",
	projectId: "todo-ninja-53562",
	storageBucket: "todo-ninja-53562.appspot.com",
	messagingSenderId: "608180225441",
	appId: "1:608180225441:web:3bfd96f0deaf4ae24f37e0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;
