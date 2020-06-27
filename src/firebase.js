import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCPFQUeZDXn_kcy3J48rb53qSbcWeCaEUs",
  authDomain: "svelte-crud-85906.firebaseapp.com",
  databaseURL: "https://svelte-crud-85906.firebaseio.com",
  projectId: "svelte-crud-85906",
  storageBucket: "svelte-crud-85906.appspot.com",
  messagingSenderId: "313130629863",
  appId: "1:313130629863:web:4c884c2747b80746284042",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore()