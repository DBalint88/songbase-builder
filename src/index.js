import { initializeApp } from 'firebase/app'
import { getFirestore, collection,
    addDoc
 } from 'firebase/firestore'

 import { 
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged

} from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyC61HybpprKggSz0hCpkVWXDdCv7SyXHHo",
    authDomain: "hhs-piano-page.firebaseapp.com",
    projectId: "hhs-piano-page",
    storageBucket: "hhs-piano-page.appspot.com",
    messagingSenderId: "324874631780",
    appId: "1:324874631780:web:fd9a89e56ffb346a6a7d71"
  };


initializeApp(firebaseConfig)

const auth = getAuth()
const provider = new GoogleAuthProvider();
const loginButton = document.getElementById("login-button")

loginButton.addEventListener('click', () => {
    signInWithPopup(auth, provider)
})

onAuthStateChanged(auth, async (user) => {
    if (user) {
        loginButton.style.display = 'none'
    }
})

const db = getFirestore()
const colRef = collection(db, 'songs')

// add documents
const addSongForm = document.getElementById("addSongForm")
addSongForm.addEventListener('submit', (e) => {
    e.preventDefault()
    addDoc(colRef, {
        title: addSongForm.title.value,
        level: Number(addSongForm.level.value),
        sequence: Number(addSongForm.sequence.value),
        youtube: addSongForm.youtube.value,
        image: addSongForm.image.value
    })
    .then(() => {
        addSongForm.reset()
        addSongForm.title.focus();
    })
})