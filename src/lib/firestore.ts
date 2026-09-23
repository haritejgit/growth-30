import { collection, deleteDoc, doc, getDoc, getDocs, query, setDoc, where, writeBatch } from 'firebase/firestore';
import { db } from './firebase';
import type { CheckIn, DailyTask, Goal, UserProfile } from '../types';

function firestore() { if (!db) throw new Error('Firebase is not configured. Add your VITE_FIREBASE_* variables.'); return db; }
const clean = (value: Record<string, unknown>) => Object.fromEntries(Object.entries(value).filter(([, item]) => item !== undefined));
const read = async <T,>(name: string, userId: string) => { const result = await getDocs(query(collection(firestore(), name), where('userId', '==', userId))); return result.docs.map((item) => ({ id: item.id, ...item.data() })) as T[]; };

export async function getUserProfile(uid: string) { const snapshot = await getDoc(doc(firestore(), 'users', uid)); return snapshot.exists() ? snapshot.data() as UserProfile : null; }
export async function saveUserProfile(profile: UserProfile) { await setDoc(doc(firestore(), 'users', profile.uid), clean({ ...profile, updatedAt: new Date().toISOString() }), { merge: true }); }
export const getGoals = (uid: string) => read<Goal>('userGoals', uid);
export const getTasks = (uid: string) => read<DailyTask>('dailyTasks', uid);
export const getCheckIns = (uid: string) => read<CheckIn>('dailyCheckIns', uid);

export async function saveGoal(uid: string, goal: Goal, startDate: string) {
  const database = firestore(); const batch = writeBatch(database);
  batch.set(doc(database, 'userGoals', goal.id), clean({ ...goal, userId: uid, createdAt: goal.createdAt ?? new Date().toISOString() }));
  const start = new Date(`${startDate}T00:00:00`);
  for (let offset = 0; offset < 30; offset += 1) { const date = new Date(start); date.setDate(start.getDate() + offset); const taskDate = date.toISOString().slice(0, 10); const task: DailyTask = { id: `${goal.id}-${taskDate}`, goalId: goal.id, userId: uid, date: taskDate, title: goal.title, category: goal.category, targetValue: goal.targetValue, targetUnit: goal.targetUnit, completedValue: 0, status: 'not-completed' }; batch.set(doc(database, 'dailyTasks', task.id), clean(task as unknown as Record<string, unknown>)); }
  await batch.commit();
}
export async function updateGoal(uid: string, goal: Goal) { await setDoc(doc(firestore(), 'userGoals', goal.id), clean({ ...goal, userId: uid, updatedAt: new Date().toISOString() }), { merge: true }); }
export async function removeGoal(uid: string, goalId: string) { const database = firestore(); await deleteDoc(doc(database, 'userGoals', goalId)); const tasks = await getDocs(query(collection(database, 'dailyTasks'), where('userId', '==', uid), where('goalId', '==', goalId))); await Promise.all(tasks.docs.map((item) => deleteDoc(item.ref))); }
export async function saveTask(uid: string, task: DailyTask) { await setDoc(doc(firestore(), 'dailyTasks', task.id), clean({ ...task, userId: uid, updatedAt: new Date().toISOString() }), { merge: true }); }
export async function saveCheckIn(uid: string, checkIn: CheckIn) { await setDoc(doc(firestore(), 'dailyCheckIns', `${uid}-${checkIn.date}`), clean({ ...checkIn, userId: uid, updatedAt: new Date().toISOString() }), { merge: true }); }
