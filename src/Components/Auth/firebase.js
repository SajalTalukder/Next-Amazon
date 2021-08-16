import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDNMFPO4Be-xzxXycan3AhNM2TZsqGz-Q0",
  authDomain: "next-516f7.firebaseapp.com",
  projectId: "next-516f7",
  storageBucket: "next-516f7.appspot.com",
  messagingSenderId: "539149764429",
  appId: "1:539149764429:web:885a8578ea1197527cd904",
  measurementId: "G-DEP6YPH3D1",
};
let db;
if (!firebase.apps.length) {
  db = firebase.initializeApp(firebaseConfig).firestore();
} else {
  db = firebase.app().firestore();
}

const auth = firebase.auth();

export { db, auth };
