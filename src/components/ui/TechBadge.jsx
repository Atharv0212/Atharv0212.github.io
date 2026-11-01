export default function TechBadge({ children }) {
  return (
    <span className="px-2.5 py-1 bg-stone-200 border border-brand-dark rounded-md text-xs font-mono font-semibold">
      {children}
    </span>
  );
}
