export default function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="glass-card p-4">
      <div className="text-sm text-stone-500">{label}</div>
      <div className="mt-2 text-2xl font-semibold text-stone-900">{value}</div>
    </div>
  );
}
