import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBxoWLnNitmmJ34B3YnYjwPXe0sscBOmUM",
    authDomain: "pro-67-f7554.firebaseapp.com",
    projectId: "pro-67-f7554",
    storageBucket: "pro-67-f7554.appspot.com",
    messagingSenderId: "62991196406",
    appId: "1:62991196406:web:b60b1e350265baf5210cd7"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();