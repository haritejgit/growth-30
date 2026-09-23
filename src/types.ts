export type GoalCategory = 'Mind' | 'Fitness' | 'Health' | 'Career' | 'Education' | 'Passion' | 'Finance' | 'Discipline' | 'Reading' | 'Other';
export type TaskStatus = 'completed' | 'partial' | 'not-completed';
export interface UserProfile { uid: string; name: string; email: string; categories: GoalCategory[]; mission: string; commitment: number; onboardingCompleted: boolean; startDate: string | null; createdAt: string; updatedAt: string; }
export interface Goal { id: string; userId?: string; title: string; category: GoalCategory; description: string; targetValue: number; targetUnit: string; frequency: 'daily' | 'weekly'; active: boolean; color: string; createdAt?: string; updatedAt?: string; }
export interface DailyTask { id: string; goalId: string; userId: string; title: string; category: GoalCategory; date: string; targetValue: number; targetUnit: string; completedValue: number; status: TaskStatus; completedAt?: string; note?: string; }
export interface CheckIn { id?: string; userId?: string; date: string; mood: 'great' | 'okay' | 'low'; completion: TaskStatus; reflection: string; difficulty: string; createdAt?: string; }
export interface LiveSession { id: string; title: string; topic: string; time: string; challenge: string; }
export interface CommunityPost { id: string; user: string; text: string; tag: string; }
