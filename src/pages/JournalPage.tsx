import AppShell from '../components/AppShell';

export default function JournalPage() {
  return (
    <AppShell>
      <div className="container-shell max-w-3xl">
        <div className="pb-8">
          <div className="text-sm uppercase tracking-[0.18em] text-stone-500">Journal</div>
          <h1 className="mt-2 text-3xl font-semibold text-stone-900">Daily reflection</h1>
        </div>

        <div className="glass-card p-6">
          <label className="mb-2 block text-sm font-medium text-stone-700">How was your day?</label>
          <textarea rows={5} className="w-full rounded-2xl border border-stone-300 bg-stone-50 p-3 text-sm outline-none transition focus:border-stone-500" />

          <label className="mb-2 mt-6 block text-sm font-medium text-stone-700">What did you accomplish?</label>
          <textarea rows={4} className="w-full rounded-2xl border border-stone-300 bg-stone-50 p-3 text-sm outline-none transition focus:border-stone-500" />

          <label className="mb-2 mt-6 block text-sm font-medium text-stone-700">What will you do differently tomorrow?</label>
          <textarea rows={4} className="w-full rounded-2xl border border-stone-300 bg-stone-50 p-3 text-sm outline-none transition focus:border-stone-500" />

          <button className="primary-button mt-6">Save entry</button>
        </div>
      </div>
    </AppShell>
  );
}
