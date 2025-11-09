export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-neutral-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <div className="flex items-center gap-2">
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 12h16"/><rect x="2" y="8" width="20" height="12" rx="2"/>
            <path d="M6 8V6a2 2 0 0 1 2-2h.5l7.5 2"/><circle cx="8" cy="14" r="2"/>
          </svg>
          <span className="text-xl font-semibold">PodcastApp</span>
        </div>
        <div className="flex items-center gap-4">
          <button aria-label="Search" className="rounded-full p-2 hover:bg-neutral-100">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
            </svg>
          </button>
          <div className="h-8 w-8 overflow-hidden rounded-full bg-neutral-200 ring-1 ring-neutral-300 flex items-center justify-center">
            <svg className="h-5 w-5 text-neutral-600" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21a8 8 0 1 0-16 0"/><circle cx="12" cy="7" r="4"/>
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}

