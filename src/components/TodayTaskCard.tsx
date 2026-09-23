import type { DailyTask } from '../types';

export default function TodayTaskCard({ task }: { task: DailyTask }) {
  return (
    <div className="glass-card p-4">
      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="text-sm text-stone-500">{task.category}</div>
          <h4 className="mt-1 text-lg font-semibold text-stone-900">{task.title}</h4>
        </div>
        <button className={`rounded-full px-3 py-2 text-xs font-semibold ${task.done ? 'bg-emerald-100 text-emerald-700' : 'bg-stone-900 text-white'}`}>
          {task.done ? 'Done' : 'Start'}
        </button>
      </div>

      <p className="mt-3 text-sm text-stone-600">Target: {task.target}</p>

      <div className="mt-4 h-2 overflow-hidden rounded-full bg-stone-200">
        <div className="h-full rounded-full bg-stone-900" style={{ width: `${task.progress}%` }} />
      </div>
      <div className="mt-2 text-right text-xs text-stone-500">{task.progress}% complete</div>
    </div>
  );
}
