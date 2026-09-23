import AppShell from '../components/AppShell';
import StatCard from '../components/StatCard';

export default function AdminDashboard() {
  return (
    <AppShell>
      <div className="container-shell">
        <div className="pb-8">
          <div className="text-sm uppercase tracking-[0.18em] text-stone-500">Admin</div>
          <h1 className="mt-2 text-3xl font-semibold text-stone-900">Day 8 community dashboard</h1>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <StatCard label="Participants" value="12,420" />
          <StatCard label="Active today" value="10,850" />
          <StatCard label="Completed" value="8,932" />
          <StatCard label="Avg completion" value="81%" />
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="glass-card p-6">
            <div className="section-title">Goal categories</div>
            <div className="mt-6 space-y-4">
              {[
                ['Workout', '7,821'],
                ['Learning', '6,204'],
                ['Passion', '5,113'],
                ['Health', '4,902'],
              ].map(([label, value]) => (
                <div key={label} className="flex items-center justify-between rounded-2xl bg-stone-50 p-4 text-sm">
                  <span className="text-stone-600">{label}</span>
                  <strong className="text-stone-900">{value}</strong>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-6">
            <div className="section-title">Live question queue</div>
            <div className="mt-6 space-y-3 text-sm text-stone-700">
              <div className="rounded-2xl border border-stone-200 p-4">I work 10 hours a day. How can I find time for my passion?</div>
              <div className="rounded-2xl border border-stone-200 p-4">I keep quitting after a few days. How do I recover without shame?</div>
              <div className="rounded-2xl border border-stone-200 p-4">How can I balance gym and studies?</div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
