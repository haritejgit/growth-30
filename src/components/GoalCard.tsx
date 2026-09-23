import type { Goal } from '../types';

export default function GoalCard({ goal }: { goal: Goal }) {
  return (
    <div className="glass-card p-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-sm text-stone-500">{goal.category}</div>
          <h3 className="mt-1 text-xl font-semibold text-stone-900">{goal.title}</h3>
        </div>
        <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${goal.color}`}>
          {goal.frequency}
        </span>
      </div>

      <p className="mt-3 text-sm text-stone-600">{goal.description}</p>

      <div className="mt-4 flex items-center justify-between text-sm text-stone-700">
        <span>Target</span>
        <strong>
          {goal.targetValue} {goal.targetUnit}
        </strong>
      </div>
    </div>
  );
}
