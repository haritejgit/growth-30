import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AuthPage from './pages/AuthPage';
import OnboardingPage from './pages/OnboardingPage';
import TodayPage from './pages/TodayPage';
import GoalsPage from './pages/GoalsPage';
import ProgressPage from './pages/ProgressPage';
import LivePage from './pages/LivePage';
import JournalPage from './pages/JournalPage';
import CommunityPage from './pages/CommunityPage';
import AdminDashboard from './pages/AdminDashboard';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/onboarding" element={<OnboardingPage />} />
      <Route path="/app/today" element={<TodayPage />} />
      <Route path="/app/goals" element={<GoalsPage />} />
      <Route path="/app/progress" element={<ProgressPage />} />
      <Route path="/app/live" element={<LivePage />} />
      <Route path="/app/journal" element={<JournalPage />} />
      <Route path="/app/community" element={<CommunityPage />} />
      <Route path="/admin" element={<AdminDashboard />} />
    </Routes>
  );
}
