import { collection, doc, getDoc, getDocs, query, setDoc, where, writeBatch, type DocumentData } from 'firebase/firestore';
import { db } from './firebase';
import type { CheckIn, DailyTask, Goal } from '../types';
import type { MissionProfile } from '../state/AppState';

function requireDb() {
  if (!db) throw new Error('Firebase is not configured. Add your VITE_FIREBASE_* variables.');
  return db;
}

function clean<T extends DocumentData>(value: T) {
  return Object.fromEntries(Object.entries(value).filter(([, item]) => item !== undefined));
}

export async function getUserProfile(userId: string) {
  const snapshot = await getDoc(doc(requireDb(), 'users', userId));
  return snapshot.exists() ? snapshot.data() as MissionProfile : null;
}

export async function saveUserProfile(userId: string, profile: MissionProfile) {
  await setDoc(doc(requireDb(), 'users', userId), clean({ ...profile, id: userId, userId, updatedAt: new Date().toISOString() }), { merge: true });
}

export async function getUserCollection<T>(name: 'userGoals' | 'dailyTasks' | 'dailyCheckIns', userId: string) {
  const result = await getDocs(query(collection(requireDb(), name), where('userId', '==', userId)));
  return result.docs.map((item) => ({ id: item.id, ...item.data() })) as T[];
}

export async function saveGoalAndTasks(userId: string, goal: Goal, startDate: string) {
  const firestore = requireDb();
  const batch = writeBatch(firestore);
  batch.set(doc(firestore, 'userGoals', goal.id), clean({ ...goal, userId, createdAt: new Date().toISOString() }));
  const start = new Date(`${startDate}T00:00:00`);
  for (let index = 0; index < 30; index += 1) {
    const date = new Date(start);
    date.setDate(start.getDate() + index);
    const dateKey = date.toISOString().slice(0, 10);
    const task: DailyTask = { id: `${goal.id}-${dateKey}`, goalId: goal.id, title: goal.title, target: `${goal.targetValue} ${goal.targetUnit}`, done: false, progress: 0, category: goal.category, date: dateKey };
    batch.set(doc(firestore, 'dailyTasks', task.id), clean({ ...task, userId }));
  }
  await batch.commit();
}

export async function saveTask(userId: string, task: DailyTask) {
  await setDoc(doc(requireDb(), 'dailyTasks', task.id), clean({ ...task, userId, updatedAt: new Date().toISOString() }), { merge: true });
}

export async function saveCheckInForUser(userId: string, checkIn: CheckIn) {
  await setDoc(doc(requireDb(), 'dailyCheckIns', `${userId}-${checkIn.date}`), clean({ ...checkIn, userId, updatedAt: new Date().toISOString() }), { merge: true });
}
