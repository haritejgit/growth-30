import AppShell from '../components/AppShell';
import { liveSessions } from '../data/mockData';

export default function LivePage() {
  return (
    <AppShell>
      <div className="container-shell max-w-3xl">
        <div className="pb-8">
          <div className="text-sm uppercase tracking-[0.18em] text-stone-500">Nightly live</div>
          <h1 className="mt-2 text-3xl font-semibold text-stone-900">Stay connected to the program</h1>
        </div>

        {liveSessions.map((session) => (
          <div key={session.id} className="glass-card p-6">
            <div className="text-sm uppercase tracking-[0.18em] text-stone-500">{session.title}</div>
            <h2 className="mt-4 text-3xl font-semibold text-stone-900">{session.topic}</h2>
            <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-stone-600">
              <span className="pill">Starts at {session.time}</span>
              <span className="pill">Live session</span>
            </div>
            <p className="mt-5 text-stone-700">{session.challenge}</p>
            <div className="mt-6 flex gap-3">
              <button className="primary-button">Join live</button>
              <button className="secondary-button">Ask a question</button>
            </div>
          </div>
        ))}
      </div>
    </AppShell>
  );
}
