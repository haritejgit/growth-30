import { Goal, GoalCategory, DailyTask, LiveSession, CommunityPost } from '../types';

export const goalOptions: Array<{ label: string; value: GoalCategory }> = [
  { label: 'Mind', value: 'Mind' },
  { label: 'Fitness', value: 'Fitness' },
  { label: 'Health', value: 'Health' },
  { label: 'Career', value: 'Career' },
  { label: 'Education', value: 'Education' },
  { label: 'Passion', value: 'Passion' },
  { label: 'Finance', value: 'Finance' },
  { label: 'Discipline', value: 'Discipline' },
  { label: 'Reading', value: 'Reading' },
  { label: 'Other', value: 'Other' },
];

export const goals: Goal[] = [
  {
    id: 'g1',
    title: 'Workout',
    category: 'Fitness',
    description: 'Move your body and build consistency.',
    targetValue: 30,
    targetUnit: 'minutes',
    frequency: 'daily',
    active: true,
    color: 'bg-emerald-100 text-emerald-700',
  },
  {
    id: 'g2',
    title: 'Video editing',
    category: 'Passion',
    description: 'Practice creating and refining edits.',
    targetValue: 30,
    targetUnit: 'minutes',
    frequency: 'daily',
    active: true,
    color: 'bg-violet-100 text-violet-700',
  },
  {
    id: 'g3',
    title: 'Reading',
    category: 'Reading',
    description: 'Build a reading habit through small sessions.',
    targetValue: 10,
    targetUnit: 'pages',
    frequency: 'daily',
    active: true,
    color: 'bg-amber-100 text-amber-700',
  },
  {
    id: 'g4',
    title: 'Healthy meals',
    category: 'Health',
    description: 'Follow a practical plan without perfection.',
    targetValue: 1,
    targetUnit: 'plan',
    frequency: 'daily',
    active: true,
    color: 'bg-cyan-100 text-cyan-700',
  },
];

export const dailyTasks: DailyTask[] = [
  { id: 't1', title: 'Workout', target: '30 min', done: true, progress: 100, category: 'Fitness' },
  { id: 't2', title: 'Video editing', target: '30 min', done: false, progress: 62, category: 'Passion' },
  { id: 't3', title: 'Healthy food', target: 'Follow today\'s plan', done: true, progress: 100, category: 'Health' },
  { id: 't4', title: 'Reading', target: '10 pages', done: false, progress: 40, category: 'Reading' },
];

export const liveSessions: LiveSession[] = [
  {
    id: 'l1',
    title: 'Day 7 Live',
    topic: 'How to stay consistent when motivation disappears',
    time: '9:00 PM',
    challenge: 'Today\'s challenge: 10-minute reset before bedtime',
  },
];

export const communityPosts: CommunityPost[] = [
  { id: 'p1', user: 'Ava', text: 'I finally edited my first short clip today. It feels good to keep going.', tag: 'Passion' },
  { id: 'p2', user: 'Sam', text: 'My biggest win was a 10-minute walk after work. Small steps count.', tag: 'Fitness' },
  { id: 'p3', user: 'Milo', text: 'I kept my plan simple and showed up anyway. That mattered more than perfect.', tag: 'Discipline' },
];

export const stats = [
  { label: 'Day', value: '7 / 30' },
  { label: 'Completion', value: '3 / 4' },
  { label: 'Consistency', value: '84%' },
  { label: 'Best streak', value: '18 days' },
];

export const journalEntries = [
  { day: 'Day 1', note: 'I want to learn editing and make this part of my routine.' },
  { day: 'Day 12', note: 'Created my first short video and felt more confident.' },
  { day: 'Day 21', note: 'Finished a full edit and learned to trust the process.' },
];
