import { initializeApp } from 'firebase/app'
import { getAuth } from "firebase/auth"
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
    
    const firebaseConfig = {
        apiKey: "AIzaSyCE6OhIiKardza0vXae-AcCLX-90EVmz8A",
        authDomain: "imobular.firebaseapp.com",
        projectId: "imobular",
        storageBucket: "imobular.appspot.com",
        messagingSenderId: "1022314590470",
        appId: "1:1022314590470:web:13cfc17f23db7d109eee87",
        measurementId: "G-6CQCW1TT7G"
    };
  
    const app = initializeApp(firebaseConfig)

    const auth = getAuth(app)
    const db = getFirestore(app)
    const storage = getStorage(app)

export {
    auth,
    db,
    storage
}  