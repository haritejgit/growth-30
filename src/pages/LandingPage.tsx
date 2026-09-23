import AppShell from '../components/AppShell';
import { Link } from 'react-router-dom';
import { stats, dailyTasks, liveSessions } from '../data/mockData';
import TodayTaskCard from '../components/TodayTaskCard';

export default function LandingPage() {
  return (
    <AppShell>
      <div className="container-shell">
        <section className="grid gap-8 pb-12 pt-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <span className="pill">Personal growth, one day at a time</span>
            <h1 className="mt-6 page-title leading-tight">
              Don’t come here to show your life. Come here to change it.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-stone-600">
              Growth 30 helps people define a meaningful goal, build realistic daily actions,
              complete them, and reflect with accountability.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/onboarding" className="primary-button">
                Start the 30-day mission
              </Link>
              <Link to="/auth" className="secondary-button">
                Log in
              </Link>
            </div>

            <div className="mt-10 grid max-w-lg grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((item) => (
                <div key={item.label} className="glass-card p-4 text-left">
                  <div className="text-sm text-stone-500">{item.label}</div>
                  <div className="mt-2 text-xl font-semibold text-stone-900">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-5">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-stone-500">Day 7 / 30</div>
                <h2 className="mt-1 text-2xl font-semibold text-stone-900">Your Mission Today</h2>
              </div>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                3 / 4 complete
              </span>
            </div>

            <div className="mt-6 space-y-4">
              {dailyTasks.map((task) => (
                <TodayTaskCard key={task.id} task={task} />
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-6 pb-16 md:grid-cols-2">
          <div className="glass-card p-6">
            <div className="section-title">Tonight’s live</div>
            {liveSessions.map((session) => (
              <div key={session.id} className="mt-4 rounded-2xl bg-stone-900 p-5 text-white">
                <div className="text-xs uppercase tracking-[0.2em] text-stone-300">{session.title}</div>
                <div className="mt-3 text-2xl font-semibold">{session.topic}</div>
                <div className="mt-4 text-sm text-stone-300">Starts at {session.time}</div>
                <div className="mt-3 text-sm text-stone-200">{session.challenge}</div>
                <button className="mt-5 inline-flex items-center rounded-xl bg-white px-4 py-2 text-sm font-semibold text-stone-900">
                  Join live
                </button>
              </div>
            ))}
          </div>

          <div className="glass-card p-6">
            <div className="section-title">What this app is about</div>
            <ul className="mt-5 space-y-4 text-sm text-stone-700">
              <li>• Help users decide what they want to improve.</li>
              <li>• Turn broad goals into realistic daily actions.</li>
              <li>• Track completion without punishing missed days.</li>
              <li>• Use reflection and accountability instead of productivity theater.</li>
            </ul>
          </div>
        </section>
      </div>
    </AppShell>
  );
}
