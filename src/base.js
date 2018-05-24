import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import Rebase from 're-base'

// Initialize Firebase
const config = {
    apiKey: "AIzaSyDm71EEkTi3Tz5sm-wYitHILT42tB-QUiU",
    authDomain: "noteherder-e5896.firebaseapp.com",
    databaseURL: "https://noteherder-e5896.firebaseio.com",
    projectId: "noteherder-e5896",
    storageBucket: "noteherder-e5896.appspot.com",
    messagingSenderId: "672274357192"
  };
  const app = firebase.initializeApp(config);

  export const githubProvider = new firebase.auth.GithubAuthProvider()
  export const auth = firebase.auth()

  export const googleProvider = new firebase.auth.GoogleAuthProvider()

  export default Rebase.createClass(app.database())