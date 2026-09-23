export type GoalCategory = 'Mind' | 'Fitness' | 'Health' | 'Career' | 'Education' | 'Passion' | 'Finance' | 'Discipline' | 'Reading' | 'Other';
export interface Goal { id: string; title: string; category: GoalCategory; description: string; targetValue: number; targetUnit: string; frequency: 'daily' | 'weekly'; active: boolean; color: string; }
export interface DailyTask { id: string; goalId?: string; title: string; target: string; done: boolean; progress: number; category: GoalCategory; date?: string; note?: string; completedAt?: string; }
export interface CheckIn { date: string; mood: 'great' | 'okay' | 'low'; reflection: string; difficulty: string; }
export interface LiveSession { id: string; title: string; topic: string; time: string; challenge: string; }
export interface CommunityPost { id: string; user: string; text: string; tag: string; }
