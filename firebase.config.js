const firebase = require ('firebase')

const config = {
  apiKey: 'AIzaSyD0hCMWKSEpa4MvGOYWxPPaOvfEfwjBjVU',
  authDomain: 'readingcorner-c8764.firebaseapp.com',
  databaseURL: 'https://readingcorner-c8764.firebaseio.com/',
  storageBucket: 'gs://readingcorner-c8764.appspot.com',
  messagingSenderId: '836894626942',
};
firebase.initializeApp(config);

module.exports = firebase;
