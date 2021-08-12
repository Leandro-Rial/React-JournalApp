import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCCSPs9Nf0BdCtbnLC-AZf56UrEgI1xlYc",
  authDomain: "react-app-cursos-28f00.firebaseapp.com",
  projectId: "react-app-cursos-28f00",
  storageBucket: "react-app-cursos-28f00.appspot.com",
  messagingSenderId: "863069642814",
  appId: "1:863069642814:web:408f83034b3c331bdbb16f",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
