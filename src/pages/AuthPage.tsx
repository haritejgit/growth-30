import AppShell from '../components/AppShell';

export default function AuthPage() {
  return (
    <AppShell>
      <div className="container-shell flex min-h-[70vh] items-center justify-center">
        <div className="w-full max-w-md rounded-[2rem] border border-stone-200 bg-white/80 p-8 shadow-soft">
          <div className="text-center">
            <div className="text-sm uppercase tracking-[0.18em] text-stone-500">Welcome back</div>
            <h1 className="mt-3 text-3xl font-semibold text-stone-900">Log in</h1>
          </div>

          <form className="mt-8 space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-stone-700">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-2xl border border-stone-300 bg-stone-50 px-4 py-3 text-sm outline-none transition focus:border-stone-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-stone-700">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full rounded-2xl border border-stone-300 bg-stone-50 px-4 py-3 text-sm outline-none transition focus:border-stone-500"
              />
            </div>

            <button type="submit" className="primary-button w-full">
              Continue
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-stone-600">
            New here? <a href="/onboarding" className="font-semibold text-stone-900">Create account</a>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
