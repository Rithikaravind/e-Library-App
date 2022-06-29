import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDmUwsQgI-KQvhGKjANpXxfZRq4Zs-A-lA",
  authDomain: "e-library-2-c7d3c.firebaseapp.com",
  projectId: "e-library-2-c7d3c",
  storageBucket: "e-library-2-c7d3c.appspot.com",
  messagingSenderId: "625484860341",
  appId: "1:625484860341:web:538fbd10e35a34d80027fc"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
