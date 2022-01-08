import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBZBmCLBjrTvzT2h_CWq4YP0DNkvzJX7LQ",
    authDomain: "hackathon-project-16cb2.firebaseapp.com",
    projectId: "hackathon-project-16cb2",
    storageBucket: "hackathon-project-16cb2.appspot.com",
    messagingSenderId: "885696477727",
    appId: "1:885696477727:web:d7852ae8636b09d38a332a"
  };

  const firebaseApp = firebase.intializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};