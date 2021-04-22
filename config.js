import  firebase from 'firebase'
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyCcv2V63tovTc0wSURf74LojCP-Ujti0ZA",
  authDomain: "story-9070f.firebaseapp.com",
  projectId: "story-9070f",
  storageBucket: "story-9070f.appspot.com",
  messagingSenderId: "476087478853",
  appId: "1:476087478853:web:018793f852f8f6056f912c"
};

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();