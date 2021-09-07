import firebase from "firebase/compat/app"
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA_xfW1IA-4uiHdn0dXarH4T8f7nwO_FdQ",
    authDomain: "fireblogsyt-e05bf.firebaseapp.com",
    projectId: "fireblogsyt-e05bf",
    storageBucket: "fireblogsyt-e05bf.appspot.com",
    messagingSenderId: "466551354805",
    appId: "1:466551354805:web:2ce272bf7037e668ab95fc"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {timestamp};
  export default firebaseApp.firestore();