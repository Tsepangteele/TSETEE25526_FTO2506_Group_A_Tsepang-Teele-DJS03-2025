/**
 * @typedef {Object} PodcastPreviewProps
 * @property {string} title
 * @property {string} image
 * @property {number} seasons
 * @property {string[]} genres
 * @property {string} updatedText
 */

/** @param {PodcastPreviewProps} props */
export default function PodcastPreviewCard({ title, image, seasons, genres, updatedText }) {
  return (
    <article className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition hover:shadow-md">
      <div className="aspect-[16/12] w-full bg-neutral-100">
        {image ? (
          <img src={image} alt={`${title} cover`} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-neutral-500">
            Podcast Cover
          </div>
        )}
      </div>

      <div className="space-y-3 p-4">
        <h3 className="text-base font-semibold tracking-tight sm:text-lg">{title}</h3>

        <div className="flex items-center gap-2 text-sm text-neutral-600">
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
               aria-hidden="true">
            <path d="M8 2v4"/><path d="M16 2v4"/><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M3 10h18"/>
          </svg>
          <span>{seasons} {seasons === 1 ? "season" : "seasons"}</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {genres.map((g) => (
            <span
              key={g}
              className="rounded-md border border-neutral-200 bg-neutral-100 px-2 py-1 text-xs font-medium text-neutral-700"
            >
              {g}
            </span>
          ))}
        </div>

        <p className="pt-1 text-xs text-neutral-500">Updated {updatedText}</p>
      </div>
    </article>
  );
}
