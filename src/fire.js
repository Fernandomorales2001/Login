import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyA1hGMNbGLR9XWWMsilujDZzs-EbjGkegs",
    authDomain: "login-56030.firebaseapp.com",
    projectId: "login-56030",
    storageBucket: "login-56030.appspot.com",
    messagingSenderId: "1007676653522",
    appId: "1:1007676653522:web:101ddb3ce1bab57021d20b"
  };

 const fire = firebase.initializeApp(firebaseConfig);

 export default fire;