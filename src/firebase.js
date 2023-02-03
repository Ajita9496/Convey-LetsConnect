import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCs927rTLMjEFFOQ-Cp3Wfk6TL7xQOXaz4",
  authDomain: "whatsapp-clone-app-de10a.firebaseapp.com",
  projectId: "whatsapp-clone-app-de10a",
  storageBucket: "whatsapp-clone-app-de10a.appspot.com",
  messagingSenderId: "1096207682377",
  appId: "1:1096207682377:web:e6c180e1d5e6f3335c6898",
};

const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const db = app.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();

export { auth, googleProvider };

export default db;
