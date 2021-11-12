import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDcte0rSI5KWACVkJhjc4CbIj-V7KuzVsc",
	authDomain: "sepette-63811.firebaseapp.com",
	projectId: "sepette-63811",
	storageBucket: "sepette-63811.appspot.com",
	messagingSenderId: "844105746766",
	appId: "1:844105746766:web:977eed5ff482e4b490b61f",
	measurementId: "G-67VJT89X5G",
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
