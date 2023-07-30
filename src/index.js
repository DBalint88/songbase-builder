import { initializeApp } from 'firebase/app'
import { getFirestore, collection,
    addDoc
 } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyC61HybpprKggSz0hCpkVWXDdCv7SyXHHo",
    authDomain: "hhs-piano-page.firebaseapp.com",
    projectId: "hhs-piano-page",
    storageBucket: "hhs-piano-page.appspot.com",
    messagingSenderId: "324874631780",
    appId: "1:324874631780:web:fd9a89e56ffb346a6a7d71"
  };

initializeApp(firebaseConfig)
const db = getFirestore()
const colRef = collection(db, 'songs')

// add documents
const addSongForm = document.getElementById("addSongForm")
addSongForm.addEventListener('submit', (e) => {
    e.preventDefault()
    addDoc(colRef, {
        title: addSongForm.title.value,
        level: addSongForm.level.value,
        sequence: addSongForm.sequence.value,
        youtube: addSongForm.youtube.value,
        image: addSongForm.image.value
    })
    .then(() => {
        addSongForm.reset()
        addSongForm.title.focus();
    })
})