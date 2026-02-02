import { initializeApp, getApps } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD5Z-beYBUJS5kL0VjftPizpahVrP5Od44",
    authDomain: "abdattes-production-2026.firebaseapp.com",
    projectId: "abdattes-production-2026",
    storageBucket: "abdattes-production-2026.firebasestorage.app",
    messagingSenderId: "1010651736384",
    appId: "1:1010651736384:web:2476a3f0474d76a110f2a5"
};

// Initialize Firebase (Singleton pattern)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const storage = getStorage(app);
export const db = getFirestore(app);
