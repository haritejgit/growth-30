import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, type User } from 'firebase/auth';
import { auth, firebaseConfigured, firebaseSetupMessage } from '../lib/firebase';

interface AuthContextValue {
  user: User | null;
  loading: boolean;
  error: string;
  configured: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  logOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

function friendlyError(error: unknown) {
  const code = error instanceof Error ? error.message : '';
  if (code.includes('auth/invalid-credential')) return 'Email or password is incorrect.';
  if (code.includes('auth/email-already-in-use')) return 'An account with this email already exists.';
  if (code.includes('auth/weak-password')) return 'Use a password with at least six characters.';
  if (code.includes('auth/invalid-email')) return 'Enter a valid email address.';
  return code || 'Something went wrong. Please try again.';
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(firebaseConfigured);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!auth) return;
    return onAuthStateChanged(auth, (nextUser) => {
      setUser(nextUser);
      setLoading(false);
    });
  }, []);

  const run = async (operation: () => Promise<unknown>) => {
    setError('');
    if (!auth) {
      setError(firebaseSetupMessage);
      return;
    }
    try { await operation(); } catch (caught) { setError(friendlyError(caught)); throw caught; }
  };

  return <AuthContext.Provider value={{ user, loading, error, configured: firebaseConfigured, signIn: (email, password) => run(() => signInWithEmailAndPassword(auth!, email, password).then(() => undefined)), signUp: (email, password) => run(() => createUserWithEmailAndPassword(auth!, email, password).then(() => undefined)), logOut: () => run(() => signOut(auth!)) }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used inside AuthProvider');
  return context;
}
