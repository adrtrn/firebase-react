import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyBnNXuGy7F3DiiSiEP_4U3yxxX9ypiJmqg',
  authDomain: 'first-flight-ebcbe.firebaseapp.com',
  databaseURL: 'https://first-flight-ebcbe.firebaseio.com',
  storageBucket: 'first-flight-ebcbe.appspot.com',
  messagingSenderId: '344188102954'
}

firebase.initializeApp(config)

export default firebase

export const database = firebase.database()
