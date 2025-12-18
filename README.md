# Coreveil – AI Automation & Engineering Site

Marketing site for Coreveil with Home, Services, About, and Contact pages. Built with Vite + React + TypeScript, Tailwind, shadcn-ui, and Framer Motion, featuring hover-driven cards, a persistent hero cover background, and a validated contact form.

## Features
- Global hero background with softened gradient overlay for all routes.
- HoverEffect card grids for “Who We Serve,” “At a Glance,” and “What We Build.”
- Animated sections (Framer Motion) and responsive layout.
- Contact form with zod + react-hook-form validation and toast feedback.
- shadcn-ui component foundation and lucide icons for consistent UI.

## Tech Stack
- Vite, React 18, TypeScript
- Tailwind CSS, shadcn-ui, Radix primitives
- Framer Motion, React Router
- TanStack Query, zod, react-hook-form

## Getting Started
Prerequisites: Node.js 18+ and npm.

Install dependencies:
```sh
npm install
```

Run the dev server:
```sh
npm run dev
```

Build for production:
```sh
npm run build
```

Preview the production build locally:
```sh
npm run preview
```

Lint:
```sh
npm run lint
```

## Project Structure
- src/pages: Page-level routes (Index, Services, About, Contact, NotFound).
- src/components: Layout and sections (Navigation, HeroSection, ServicesSection, Footer, GlobalCoverBackground).
- src/components/ui: Shared UI primitives including HoverEffect and toaster.
- src/assets: Static assets (hero background, etc.).
- src/lib: Utilities (class helpers).

## Styling & UX Notes
- Tailwind for utility styling; shadcn-ui for consistent components.
- Global cover image with lighter overlay to keep imagery visible behind content.
- HoverEffect cards give linked, router-friendly tiles with animated highlights.
- Sections use subtle gradients and blur to keep text legible while showing the background.

## Deployment
- Build with `npm run build` and host the `dist` output on your platform of choice (e.g., Netlify, Vercel, S3/CloudFront).

## Scripts
- `npm run dev` – start dev server
- `npm run build` – production build
- `npm run build:dev` – development-mode build
- `npm run preview` – preview built site
- `npm run lint` – run ESLint

## Contributing
Pull requests are welcome. Please run `npm run lint` and `npm run build` before submitting changes.
