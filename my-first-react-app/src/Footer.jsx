export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-4 py-6">
      <div className="flex items-center gap-3">
        <label htmlFor="genre-filter" className="text-sm font-medium text-neutral-700">Filter by:</label>
        <select
          id="genre-filter"
          className="rounded-lg border border-neutral-300 bg-white px-4 py-2 pr-9 text-sm shadow-sm outline-none transition hover:border-neutral-400 focus:border-neutral-900"
        >
          <option>All Genres</option>
          <option>Technology</option>
          <option>Business</option>
          <option>True Crime</option>
          <option>Mystery</option>
          <option>Comedy</option>
          <option>Entertainment</option>
          <option>Health</option>
          <option>Lifestyle</option>
          <option>History</option>
          <option>Education</option>
          <option>Sports</option>
          <option>News</option>
          <option>Science</option>
          <option>Nature</option>
        </select>

        <select
          id="sort-filter"
          className="rounded-lg border border-neutral-300 bg-white px-4 py-2 pr-9 text-sm shadow-sm outline-none transition hover:border-neutral-400 focus:border-neutral-900"
        >
          <option value="recent">Recently Updated</option>
          <option value="popular">Most Popular</option>
          <option value="newest">Newest</option>
        </select>
      </div>
    </footer>
  );
}

