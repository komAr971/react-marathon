import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDYj1phkz7879_0i8_hpaNmndbjAkx1CBA",
  authDomain: "pokemon-game-c0a8f.firebaseapp.com",
  databaseURL: "https://pokemon-game-c0a8f-default-rtdb.firebaseio.com",
  projectId: "pokemon-game-c0a8f",
  storageBucket: "pokemon-game-c0a8f.appspot.com",
  messagingSenderId: "344259261741",
  appId: "1:344259261741:web:a9b86a8345374c816d0fa4"
};

firebase.initializeApp(firebaseConfig);
export const fire = firebase;
export const database = firebase.database();

export default database;