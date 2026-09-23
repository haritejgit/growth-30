import AppShell from '../components/AppShell';
import GoalCard from '../components/GoalCard';
import { goals } from '../data/mockData';

export default function GoalsPage() {
  return (
    <AppShell>
      <div className="container-shell">
        <div className="flex flex-col gap-4 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="text-sm uppercase tracking-[0.18em] text-stone-500">My goals</div>
            <h1 className="mt-2 text-3xl font-semibold text-stone-900">Your personal mission</h1>
          </div>
          <button className="primary-button">Add goal</button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {goals.map((goal) => (
            <GoalCard key={goal.id} goal={goal} />
          ))}
        </div>
      </div>
    </AppShell>
  );
}
