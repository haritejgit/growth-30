import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import type { CheckIn, DailyTask, Goal, GoalCategory } from '../types';

const STORAGE_KEY = 'growth30-local-state';

export interface MissionProfile {
  categories: GoalCategory[];
  mission: string;
  commitment: number;
  onboardingCompleted: boolean;
  startDate: string | null;
}

interface AppStateValue {
  profile: MissionProfile;
  goals: Goal[];
  tasks: DailyTask[];
  checkIns: CheckIn[];
  completeOnboarding: (profile: Omit<MissionProfile, 'onboardingCompleted' | 'startDate'>) => void;
  addGoal: (goal: Omit<Goal, 'id' | 'active' | 'color'>) => void;
  toggleTask: (taskId: string) => void;
  saveCheckIn: (checkIn: CheckIn) => void;
  resetLocalState: () => void;
}

const emptyProfile: MissionProfile = {
  categories: [], mission: '', commitment: 30, onboardingCompleted: false, startDate: null,
};
const defaultState = { profile: emptyProfile, goals: [] as Goal[], tasks: [] as DailyTask[], checkIns: [] as CheckIn[] };
const todayKey = () => new Date().toISOString().slice(0, 10);

function colorForCategory(category: GoalCategory) {
  const colors: Record<GoalCategory, string> = {
    Mind: 'bg-violet-100 text-violet-700', Fitness: 'bg-emerald-100 text-emerald-700', Health: 'bg-cyan-100 text-cyan-700', Career: 'bg-blue-100 text-blue-700', Education: 'bg-indigo-100 text-indigo-700', Passion: 'bg-fuchsia-100 text-fuchsia-700', Finance: 'bg-amber-100 text-amber-700', Discipline: 'bg-stone-200 text-stone-700', Reading: 'bg-orange-100 text-orange-700', Other: 'bg-slate-100 text-slate-700',
  };
  return colors[category];
}

const AppStateContext = createContext<AppStateValue | null>(null);

export function AppStateProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState(defaultState);
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) { try { setState(JSON.parse(saved)); } catch { localStorage.removeItem(STORAGE_KEY); } }
  }, []);
  useEffect(() => { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }, [state]);

  const value = useMemo<AppStateValue>(() => ({
    ...state,
    completeOnboarding: (profile) => setState((current) => ({ ...current, profile: { ...profile, onboardingCompleted: true, startDate: profile.startDate ?? todayKey() } })),
    addGoal: (goal) => setState((current) => {
      const id = `goal-${Date.now()}`;
      const newGoal: Goal = { ...goal, id, active: true, color: colorForCategory(goal.category) };
      const task: DailyTask = { id: `task-${Date.now()}`, goalId: id, title: goal.title, target: `${goal.targetValue} ${goal.targetUnit}`, done: false, progress: 0, category: goal.category, date: todayKey() };
      return { ...current, goals: [...current.goals, newGoal], tasks: [...current.tasks, task] };
    }),
    toggleTask: (taskId) => setState((current) => ({ ...current, tasks: current.tasks.map((task) => task.id === taskId ? { ...task, done: !task.done, progress: task.done ? 0 : 100, completedAt: task.done ? undefined : new Date().toISOString() } : task) })),
    saveCheckIn: (checkIn) => setState((current) => ({ ...current, checkIns: [...current.checkIns.filter((entry) => entry.date !== checkIn.date), checkIn] })),
    resetLocalState: () => { localStorage.removeItem(STORAGE_KEY); setState(defaultState); },
  }), [state]);
  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
}

export function useAppState() {
  const context = useContext(AppStateContext);
  if (!context) throw new Error('useAppState must be used inside AppStateProvider');
  return context;
}
