import AppShell from '../components/AppShell';
import { communityPosts } from '../data/mockData';

export default function CommunityPage() {
  return (
    <AppShell>
      <div className="container-shell max-w-3xl">
        <div className="flex items-end justify-between gap-3 pb-8">
          <div>
            <div className="text-sm uppercase tracking-[0.18em] text-stone-500">Community</div>
            <h1 className="mt-2 text-3xl font-semibold text-stone-900">Today’s wins</h1>
          </div>
          <button className="secondary-button">Share encouragement</button>
        </div>

        <div className="space-y-4">
          {communityPosts.map((post) => (
            <div key={post.id} className="glass-card p-5">
              <div className="flex items-center justify-between gap-4">
                <div className="font-semibold text-stone-900">{post.user}</div>
                <span className="pill">{post.tag}</span>
              </div>
              <p className="mt-4 text-sm leading-6 text-stone-700">{post.text}</p>
              <div className="mt-4 flex gap-3 text-sm text-stone-600">
                <button>Well done</button>
                <button>Keep going</button>
                <button>Proud of you</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
