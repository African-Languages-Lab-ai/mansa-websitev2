// App Router templates remount on every navigation, so the CSS fade below
// replays on each route change (fade out as the old page unmounts, fade in as
// the new one mounts), similar to claude.com. Using a CSS animation rather than
// a JS/framer one means that if the animation never runs (reduced motion, a
// backgrounded tab, no compositor) the content simply stays visible instead of
// getting stuck transparent.
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-fade">{children}</div>;
}
