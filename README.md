# Dr. Patwa Skin Hair Laser & Aesthetic Clinic

Website for Dr. D.K. Patwa's dermatology clinic in Prayagraj, Uttar Pradesh.

## Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS + shadcn/ui
- Supabase (database, auth, storage)
- React Router

## Getting Started

```bash
bun install
bun run dev
```

Open [http://localhost:8080](http://localhost:8080).

## Environment Variables

Create a `.env` file:

```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key
VITE_SUPABASE_PROJECT_ID=your_project_id
```

## Structure

```
src/
├── pages/       # One file per page
├── components/  # Navbar, Footer, shared UI
├── context/     # Language (Hindi/English)
├── hooks/       # Scroll animations, settings, auth
└── assets/      # Images
```

## Deployment

Deployed on Vercel. Push to `main` to auto-deploy.
