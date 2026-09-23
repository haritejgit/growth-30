import AppShell from '../components/AppShell';
import GoalCard from '../components/GoalCard';
import { goals, dailyTasks } from '../data/mockData';

export default function TodayPage() {
  return (
    <AppShell>
      <div className="container-shell">
        <section className="flex flex-col gap-4 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="text-sm uppercase tracking-[0.18em] text-stone-500">Day 7 / 30</div>
            <h1 className="mt-2 text-3xl font-semibold text-stone-900">Your Mission Today</h1>
          </div>
          <div className="rounded-full bg-emerald-100 px-3 py-2 text-sm font-semibold text-emerald-700">
            3 / 4 complete
          </div>
        </section>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            {dailyTasks.map((task) => (
              <div key={task.id} className="rounded-[1.75rem] border border-stone-200 bg-white p-4 shadow-soft">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-xs uppercase tracking-[0.18em] text-stone-500">{task.category}</div>
                    <h3 className="mt-2 text-xl font-semibold text-stone-900">{task.title}</h3>
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
            ))}
          </div>

          <div className="space-y-6">
            <div className="glass-card p-5">
              <div className="section-title">Tonight’s live</div>
              <div className="mt-4 rounded-2xl bg-stone-900 p-5 text-white">
                <div className="text-xs uppercase tracking-[0.2em] text-stone-300">How to stay consistent</div>
                <div className="mt-2 text-2xl font-semibold">9:00 PM</div>
                <p className="mt-3 text-sm text-stone-300">Today’s challenge: 10-minute reset before bed</p>
                <button className="mt-5 primary-button bg-white text-stone-900 hover:bg-stone-200">
                  Join live
                </button>
              </div>
            </div>

            <div className="glass-card p-5">
              <div className="section-title">Daily reflection</div>
              <textarea
                rows={5}
                placeholder="How was your day? What did you accomplish? What stopped you?"
                className="mt-4 w-full rounded-2xl border border-stone-300 bg-stone-50 p-3 text-sm outline-none transition focus:border-stone-500"
              />
              <button className="mt-4 primary-button w-full">Save reflection</button>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
