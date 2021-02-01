import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDvZOlAfPxP61HIF_Rwsg9qrj6bmE8bHGI",
  authDomain: "web-shop-66ae5.firebaseapp.com",
  databaseURL: "https://web-shop-66ae5.firebaseio.com",
  projectId: "web-shop-66ae5",
  storageBucket: "web-shop-66ae5.appspot.com",
  messagingSenderId: "763910665291",
  appId: "1:763910665291:web:b50a3a5783fe21b98c49ce"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

  export default firebase;
