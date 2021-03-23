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

class Firebase {
  constructor() {
    this.fire = firebase;
    this.database = firebase.database();
  }

  getPokemonSoket = (cb) => {
    this.database.ref('pokemons').on('value', (snapshot) => {
      cb(snapshot.val());
    })
  }

  getPokemonsOnce = async () => {
    return await this.database.ref('pokemons').once('value').then(snapshot => snapshot.val());
  }

  postPokemon = (key, pokemon) => {
    this.database.ref(`pokemons/${key}`).set(pokemon);
  }

  addPokemon = (newPokemon) => {
    const newKey = this.database.ref().child('pokemons').push().key;
    this.database.ref('pokemons/' + newKey).set(newPokemon)//.then(() => cb());
  }
}

export default Firebase;