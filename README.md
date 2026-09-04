# BioVerse

Interactive dashboard prototype for exploring NASA space biology research — built for the [NASA Space Apps Challenge](https://www.spaceappschallenge.org/) in Toronto (October 2025).

**Runner-up · Global Connections category** (Toronto local event)

The app turns a research-dashboard concept into a working demo: users can sign in, browse summarized papers and visualizations, take quizzes, and track progress. UI came from teammates’ prototypes; this repository is the Next.js implementation (auth, persistence, and page integration).

## Scope

| Real | Simulated (hardcoded for the demo) |
|------|-------------------------------------|
| Registration / login (JWT, httpOnly cookies) | AI-style paper summaries |
| MongoDB progress (bookmarks, quizzes, badges, search history) | Knowledge graph, trends charts, quiz content |
| Dashboard of saved activity | Live NASA corpus search / LLM calls |

Built as a weekend hackathon deliverable: high-fidelity UI and user flows for judging, not a production research platform.

## Stack

Next.js 14 · React 18 · MongoDB / Mongoose · JWT (`jose`) · bcryptjs

## Setup

Requires Node.js 18+ and a MongoDB URI (local or Atlas).

```bash
npm install
```

`.env.local`:

```bash
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key_min_32_chars
NEXT_PUBLIC_URL=http://localhost:3000
```

Optional background image: `public/assets/homepage.jpg`

```bash
npm run dev
```

Then open http://localhost:3000

## Using the app

1. Create an account or log in.
2. Explore homepage sections (search cards, trends, graph, learning hub).
3. Bookmark items or complete quiz actions while authenticated — progress writes to MongoDB.
4. View `/dashboard` for stats tied to your account.

## Layout

```
src/app/         Pages and API routes (auth, progress)
src/components/  UI sections
src/lib/         DB and auth helpers
src/models/      User / progress schema
```
