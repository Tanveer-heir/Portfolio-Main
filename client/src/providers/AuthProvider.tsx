import { useEffect, useState, type ReactNode } from 'react';
import {
  onAuthStateChanged,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  signOut as firebaseSignOut,
  type User,
} from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db, googleProvider } from '../config/firebase';
import { AuthContext } from './auth-context';

/* A user is an admin when an admins/{uid} document exists.
   firestore.rules enforces the same check on the server. */
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  /* Listen to auth state changes */
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setLoading(true);
      let admin = false;

      if (firebaseUser) {
        try {
          const adminDoc = await getDoc(doc(db, 'admins', firebaseUser.uid));
          admin = adminDoc.exists();
        } catch (error) {
          console.error('Admin check failed:', error);
        }
      }

      setUser(firebaseUser);
      setIsAdmin(admin);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  /* Handle redirect result (for when popup is blocked) */
  useEffect(() => {
    getRedirectResult(auth).catch((error) => {
      console.error('Redirect result error:', error);
    });
  }, []);

  const signInWithGoogle = async () => {
    try {
      /* Try popup first — faster UX */
      await signInWithPopup(auth, googleProvider);
    } catch (error: unknown) {
      const { code } = error as { code?: string };
      if (code === 'auth/popup-blocked') {
        await signInWithRedirect(auth, googleProvider);
      } else if (code !== 'auth/popup-closed-by-user' && code !== 'auth/cancelled-popup-request') {
        throw error;
      }
    }
  };

  const signOut = async () => {
    try {
      await firebaseSignOut(auth);
    } catch (error) {
      console.error('Sign-out failed:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, isAdmin, signInWithGoogle, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
