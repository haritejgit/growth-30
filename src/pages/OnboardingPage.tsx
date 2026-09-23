import AppShell from '../components/AppShell';
import { goalOptions } from '../data/mockData';

export default function OnboardingPage() {
  return (
    <AppShell>
      <div className="container-shell max-w-3xl">
        <div className="glass-card p-6 sm:p-8">
          <div className="text-sm uppercase tracking-[0.18em] text-stone-500">Onboarding</div>
          <h1 className="mt-3 text-3xl font-semibold text-stone-900">What do you want to improve in the next 30 days?</h1>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {goalOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                className="rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-left text-sm font-medium text-stone-700 transition hover:border-stone-400 hover:bg-white"
              >
                {option.label}
              </button>
            ))}
          </div>

          <div className="mt-8">
            <label className="mb-2 block text-sm font-medium text-stone-700">
              What is the one thing you most want to change?
            </label>
            <textarea
              rows={3}
              placeholder="I waste too much time scrolling and want to learn video editing."
              className="w-full rounded-2xl border border-stone-300 bg-stone-50 px-4 py-3 text-sm outline-none transition focus:border-stone-500"
            />
          </div>

          <div className="mt-8">
            <label className="mb-2 block text-sm font-medium text-stone-700">
              What can you realistically commit each day?
            </label>
            <div className="flex flex-wrap gap-3">
              {['20 minutes', '30 minutes', '1 hour'].map((option) => (
                <button
                  key={option}
                  type="button"
                  className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm text-stone-700 transition hover:border-stone-400"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-2xl bg-stone-100 p-5">
            <div className="text-sm uppercase tracking-[0.15em] text-stone-500">30-day mission</div>
            <div className="mt-3 text-2xl font-semibold text-stone-900">Learn video editing</div>
            <div className="mt-2 text-sm text-stone-600">Daily action: Practice editing for 30 minutes.</div>
          </div>

          <div className="mt-8 flex justify-end">
            <button type="button" className="primary-button">
              Continue to my plan
            </button>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
