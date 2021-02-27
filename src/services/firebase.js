import firebase from 'firebase';


const firebaseconfig = {
  apiKey: "AIzaSyDejk0rhfbamsJkj_H3XWMRk6YAJrw72O0",
  authDomain: "digi-crop-live.firebaseapp.com",
  projectId: "digi-crop-live",
  storageBucket: "digi-crop-live.appspot.com",
  messagingSenderId: "142278596059",
  appId: "1:142278596059:web:4f4da64fef25b8802883fe",
  measurementId: "G-DQW8KQ6RHD" 
}

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseconfig);
  }

export const db = firebase.firestore();
export const auth= firebase.auth();

export default firebase;


