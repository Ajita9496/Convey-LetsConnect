import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC7ZgdYB-YwCirYye01HmMdQaZrHcCT_jY",
  authDomain: "app-whatsapp-clone-7551e.firebaseapp.com",
  projectId: "app-whatsapp-clone-7551e",
  storageBucket: "app-whatsapp-clone-7551e.appspot.com",
  messagingSenderId: "618575728454",
  appId: "1:618575728454:web:6b760646af8fc540651f47",
};

const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const db = app.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();

export { auth, googleProvider };

export default db;
