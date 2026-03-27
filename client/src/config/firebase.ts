/* ============================================
   Firebase Configuration — Modular SDK Import
   ============================================
   Per firebase skill: Import only what you need.
   Replace placeholder values with your project's
   config from the Firebase Console.
   ============================================ */

import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey:            import.meta.env.VITE_FIREBASE_API_KEY            || 'YOUR_API_KEY',
  authDomain:        import.meta.env.VITE_FIREBASE_AUTH_DOMAIN        || 'YOUR_PROJECT.firebaseapp.com',
  projectId:         import.meta.env.VITE_FIREBASE_PROJECT_ID         || 'YOUR_PROJECT_ID',
  storageBucket:     import.meta.env.VITE_FIREBASE_STORAGE_BUCKET     || 'YOUR_PROJECT.appspot.com',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_ID       || 'YOUR_MESSAGING_ID',
  appId:             import.meta.env.VITE_FIREBASE_APP_ID             || 'YOUR_APP_ID',
};

// Initialize Firebase (singleton — safe to import anywhere)
const app = initializeApp(firebaseConfig);

// Auth — Google provider pre-configured
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

// Firestore — for storing chat messages
export const db = getFirestore(app);

export default app;
