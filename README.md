🎧 Podcast Preview App

A responsive React application that fetches and displays podcasts from the Podcast API
.
The app provides a clean, modular layout featuring podcast previews with titles, genres, season counts, and last updated times — all styled using Tailwind CSS.

🚀 Features

API Integration
Fetches real-time podcast data from an external API using the native Fetch API.

Dynamic Rendering
Uses React’s .map() to generate podcast cards dynamically from live data.

Reusable Components
Clean, modular architecture built with React functional components.
Each card is rendered via a reusable PodcastPreviewCard component.

Loading, Error & Empty States

Displays a clear loading skeleton while data is being fetched.

Shows a friendly error message if fetching fails.

Shows an empty-state message if no podcasts are available.

Responsive Design
Optimized for desktop, tablet, and mobile screens using Tailwind’s grid utilities (grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4).

Readable, Maintainable Code
Semantic structure, descriptive variable names, and inline JSDoc comments for clarity.

🧩 Tech Stack
Category	Tools
Framework	React (Vite build)
Styling	Tailwind CSS
State Management	React Hooks (useState, useEffect)
Date Formatting	date-fns
Language	JavaScript (ES6+)

Your app will be running at http://localhost:5173
 ✨

🧠 Project Structure
src/
 ├── components/
 │    └── PodcastPreviewCard.jsx   # Reusable card component
 ├── App.jsx                       # Fetch logic, layout, grid
 ├── header.jsx                    # Top navigation/header
 ├── Footer.jsx                    # Footer layout
 ├── data.js                       # Static genre reference data
 ├── main.jsx                      # React root + Tailwind import
 └── index.css                     # Tailwind entry point

💡 How It Works

On page load, App.jsx calls the API via fetch().

The response is parsed and stored in component state.

The app conditionally renders:

Loading skeletons

Error message

Empty-state message

or a responsive grid of PodcastPreviewCard components.

Each card displays:

Podcast cover image

Title

Season count

Genre tags

Relative “Last updated” time via formatDistanceToNow.

🧪 Testing Loading, Error & Empty States

Loading: Enable “Slow 3G” network in DevTools.

Error: Temporarily break the API URL or go offline.

Empty: Force setPodcasts([]) in App.jsx.

📱 Responsiveness

Mobile: 1 column (≤ 480 px)

Tablet: 2 columns (~ 768 px)

Desktop: 3–4 columns (≥ 1200 px)
