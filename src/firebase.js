import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyCsa1lUjSaYzwxgua-dHmAmuPDxGmwseng',
  authDomain: 'lunch-rush-96b39.firebaseapp.com',
  databaseURL: 'https://lunch-rush-96b39.firebaseio.com',
  storageBucket: 'lunch-rush-96b39.appspot.com',
  messagingSenderId: '1058175764641'
}

firebase.initializeApp(config)

export default firebase

export const database = firebase.database()
export const auth = firebase.auth()
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
