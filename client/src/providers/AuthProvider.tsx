import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';
import {
  onAuthStateChanged,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  signOut as firebaseSignOut,
  type User,
} from 'firebase/auth';
import { auth, googleProvider } from '../config/firebase';

/* ---- Types ---- */
interface AuthContextValue {
  user: User | null;
  loading: boolean;
  isAdmin: boolean;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
}

/* Admin email from env — used to differentiate admin vs visitor terminals */
const ADMIN_EMAIL = import.meta.env.VITE_ADMIN_EMAIL || '';

/* ---- Context ---- */
const AuthContext = createContext<AuthContextValue | undefined>(undefined);

/* ---- Provider ---- */
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  /* Listen to auth state changes */
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
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
      const firebaseError = error as { code?: string };
      /* If popup is blocked, fall back to redirect */
      if (
        firebaseError.code === 'auth/popup-blocked' ||
        firebaseError.code === 'auth/popup-closed-by-user' ||
        firebaseError.code === 'auth/cancelled-popup-request'
      ) {
        console.warn('Popup blocked, falling back to redirect…');
        await signInWithRedirect(auth, googleProvider);
      } else {
        console.error('Google sign-in failed:', error);
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

  const isAdmin = user?.email === ADMIN_EMAIL && ADMIN_EMAIL !== '';

  return (
    <AuthContext.Provider value={{ user, loading, isAdmin, signInWithGoogle, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

/* ---- Hook ---- */
export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within an AuthProvider');
  return ctx;
}
