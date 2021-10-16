import firebase from "firebase/compat/app"
import "firebase/compat/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAI4oidkXvzURK76g-77SlGI7KbIq_F3qg",
  authDomain: "moocode-49138.firebaseapp.com",
  projectId: "moocode-49138",
  storageBucket: "moocode-49138.appspot.com",
  messagingSenderId: "199942189570",
  appId: "1:199942189570:web:c0d940d4469741e1866d1b",
  measurementId: "G-T9V9028DN6",
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export const storage = firebase.storage()

export default firebase
