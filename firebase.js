import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDVGIkR3qwReFuiPCvnhYRAeD42I0fvyPY",
	authDomain: "torba-ca3f4.firebaseapp.com",
	projectId: "torba-ca3f4",
	storageBucket: "torba-ca3f4.appspot.com",
	messagingSenderId: "389875272763",
	appId: "1:389875272763:web:d187385e07416bfe80a01e",
	measurementId: "G-CXP8Z21NXW",
};
let app;

if (firebase.apps.length === 0) {
	const firebaseApp = firebase.initializeApp(firebaseConfig);
} else {
	app = firebase.app();
}

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
