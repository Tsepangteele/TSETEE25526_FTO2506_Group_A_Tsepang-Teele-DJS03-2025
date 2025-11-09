import { useEffect, useState } from "react";
import { formatDistanceToNow } from "date-fns";
import Header from "./header";
import Footer from "./Footer";
import PodcastPreviewCard from "./components/PodcastPreviewCard";


const GENRES = {
  1: "Personal Growth",
  2: "True Crime",
  3: "History",
  4: "Entertainment",
  5: "Business",
  6: "Comedy",
  7: "Fiction",
  8: "News",
  9: "Kids & Family",
};

export default function App() {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setLoading(true);
        setError("");
        const res = await fetch("https://podcast-api.netlify.app/");
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();

        // Normalize to what our card expects
        const items = (Array.isArray(data) ? data : data?.podcasts || []).map((p) => ({
          id: p.id ?? p.uuid ?? crypto.randomUUID(),
          title: p.title ?? p.name ?? "Untitled",
          image: p.image ?? p.thumbnail ?? "",
          seasons: p.seasons ?? p.numSeasons ?? 0,
          genres: (p.genres || p.genreIds || p.genre || []).map((g) =>
            typeof g === "number" ? (GENRES[g] ?? `Genre ${g}`) : g
          ),
          updatedText: p.updatedAt || p.updated || p.lastUpdated
            ? formatDistanceToNow(new Date(p.updatedAt || p.updated || p.lastUpdated), { addSuffix: true })
            : "unknown",
        }));

        if (!cancelled) setPodcasts(items);
      } catch (e) {
        if (!cancelled) setError("Couldn’t load podcasts. Please try again.");
        console.error(e);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => { cancelled = true; };
  }, []);

  return (
    <>
      <Header />
      <Footer />

      <main className="mx-auto w-full max-w-6xl px-4 py-6">
        {/* Loading */}
        {loading && (
          <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="h-64 animate-pulse rounded-xl border border-neutral-200 bg-neutral-100" />
            ))}
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div role="alert" className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-700">
            {error}
          </div>
        )}

        {/* Empty */}
        {!loading && !error && podcasts.length === 0 && (
          <p className="text-neutral-600">No podcasts found.</p>
        )}

        {/* Grid */}
        {!loading && !error && podcasts.length > 0 && (
          <section
            aria-label="Podcast list"
            className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {podcasts.map((p) => (
              <PodcastPreviewCard
                key={p.id}
                title={p.title}
                image={p.image}
                seasons={p.seasons}
                genres={p.genres}
                updatedText={p.updatedText}
              />
            ))}
          </section>
        )}
      </main>

    </>
  );
}
