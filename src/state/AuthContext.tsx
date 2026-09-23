import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, type User } from 'firebase/auth';
import { auth, firebaseConfigured, firebaseSetupMessage } from '../lib/firebase';

interface AuthContextValue { user: User | null; loading: boolean; error: string; configured: boolean; signIn: (email: string, password: string) => Promise<User>; signUp: (email: string, password: string) => Promise<User>; logOut: () => Promise<void>; }
const AuthContext = createContext<AuthContextValue | null>(null);
function friendlyError(error: unknown) { const code = error instanceof Error ? error.message : ''; if (code.includes('auth/invalid-credential')) return 'Email or password is incorrect.'; if (code.includes('auth/email-already-in-use')) return 'An account with this email already exists.'; if (code.includes('auth/weak-password')) return 'Use a password with at least six characters.'; if (code.includes('auth/invalid-email')) return 'Enter a valid email address.'; return code || 'Something went wrong. Please try again.'; }
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null); const [loading, setLoading] = useState(firebaseConfigured); const [error, setError] = useState('');
  useEffect(() => { if (!auth) { setLoading(false); return; } return onAuthStateChanged(auth, (next) => { setUser(next); setLoading(false); }); }, []);
  const run = async <T,>(operation: () => Promise<T>) => { setError(''); if (!auth) { const message = firebaseSetupMessage; setError(message); throw new Error(message); } try { return await operation(); } catch (caught) { const message = friendlyError(caught); setError(message); throw new Error(message); } };
  const value = useMemo(() => ({ user, loading, error, configured: firebaseConfigured, signIn: (email: string, password: string) => run(() => signInWithEmailAndPassword(auth!, email, password).then((result) => result.user)), signUp: (email: string, password: string) => run(() => createUserWithEmailAndPassword(auth!, email, password).then((result) => result.user)), logOut: () => run(() => signOut(auth!)) }), [user, loading, error]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export function useAuth() { const context = useContext(AuthContext); if (!context) throw new Error('useAuth must be used inside AuthProvider'); return context; }
