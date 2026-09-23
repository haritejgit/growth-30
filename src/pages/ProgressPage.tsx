import AppShell from '../components/AppShell';
import StatCard from '../components/StatCard';
import { journalEntries } from '../data/mockData';

export default function ProgressPage() {
  return (
    <AppShell>
      <div className="container-shell">
        <div className="pb-8">
          <div className="text-sm uppercase tracking-[0.18em] text-stone-500">Progress</div>
          <h1 className="mt-2 text-3xl font-semibold text-stone-900">Day 18 / 30</h1>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <StatCard label="Consistency" value="84%" />
          <StatCard label="Completed" value="42 / 50" />
          <StatCard label="Fitness" value="82%" />
          <StatCard label="Passion" value="74%" />
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="glass-card p-6">
            <div className="text-xl font-semibold text-stone-900">30-day calendar</div>
            <div className="mt-6 grid grid-cols-7 gap-2">
              {Array.from({ length: 30 }).map((_, index) => (
                <div
                  key={index}
                  className={`flex h-10 items-center justify-center rounded-xl text-xs font-medium ${
                    index % 3 === 0
                      ? 'bg-emerald-100 text-emerald-700'
                      : index % 3 === 1
                        ? 'bg-amber-100 text-amber-700'
                        : 'bg-stone-200 text-stone-600'
                  }`}
                >
                  {index + 1}
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-6">
            <div className="text-xl font-semibold text-stone-900">Milestones</div>
            <div className="mt-5 space-y-4">
              {journalEntries.map((entry) => (
                <div key={entry.day} className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                  <div className="text-sm font-semibold text-stone-900">{entry.day}</div>
                  <div className="mt-2 text-sm text-stone-600">{entry.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
