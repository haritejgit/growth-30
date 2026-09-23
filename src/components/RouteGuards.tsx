import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../state/AuthContext';
import { useAppState } from '../state/AppState';
export function AuthLoading() { return <div className="flex min-h-screen items-center justify-center bg-stone-100 p-6 text-stone-600">Loading your account…</div>; }
export function ProtectedRoute() { const { user, loading } = useAuth(); const location = useLocation(); if (loading) return <AuthLoading />; if (!user) return <Navigate to="/auth" replace state={{ from: location.pathname }} />; return <Outlet />; }
export function JourneyRoute() { const { user, loading } = useAuth(); const { profile, loading: dataLoading } = useAppState(); if (loading || dataLoading) return <AuthLoading />; if (!user) return <Navigate to="/auth" replace />; if (!profile.onboardingCompleted) return <Navigate to="/onboarding" replace />; return <Outlet />; }
