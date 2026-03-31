# Portfolio Main (Client)

Cinematic engineering portfolio built with React, TypeScript, Framer Motion, and Firebase.

This client focuses on a high-fidelity visual identity:

- Topographic animated background
- Custom cinematic cursor and mouse glow
- Decryption headline effects
- Spotlight/tilt cards
- Logic trace timelines
- Smooth route transitions
- Footer terminal status log

## Tech Stack

- React 19
- TypeScript
- Vite
- Framer Motion
- React Router
- Firebase Auth + Firestore

## Key Features

- Multi-page portfolio experience with dedicated routes for:
  - Home, About, Projects, Research, Experience, Hackathons, Articles, Skills, Education, Hobby, Contact, Admin
- Modular visual effects system in src/components/effects
- Firestore-powered contact terminal and admin dashboard
- Glassmorphism + cinematic motion design language
- Responsive layout across desktop/mobile

## Project Structure

```text
src/
  components/
    effects/
      BootSequence.tsx
      CinematicCursor.tsx
      DecryptText.tsx
      FooterSystemLog.tsx
      LogicTrace.tsx
      MouseGlow.tsx
      PageTransition.tsx
      SpotlightCard.tsx
      TopographicBackground.tsx
      index.ts
  config/
    firebase.ts
    navigation.ts
  data/
    portfolio-data.ts
  features/
    ... section-level UIs ...
  layouts/
    MainLayout/
  pages/
    ... route pages ...
```

## Local Development

1. Install dependencies

```bash
npm install
```

2. Create environment file

Create a .env file in the client root with:

```bash
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_STORAGE_BUCKET=...
VITE_FIREBASE_MESSAGING_ID=...
VITE_FIREBASE_APP_ID=...
```

3. Run development server

```bash
npm run dev
```

4. Build for production

```bash
npm run build
```

5. Preview production build

```bash
npm run preview
```

## NPM Scripts

- npm run dev: start Vite dev server
- npm run build: type-check and build production bundle
- npm run lint: run ESLint
- npm run preview: serve built app locally

## Content Editing

- Main portfolio content lives in src/data/portfolio-data.ts.
- Navigation and social links live in src/config/navigation.ts.
- Firebase configuration is in src/config/firebase.ts.

## Image Workflow

Current footer logo:

- public/images/plaksha.png

Reusable placeholders:

- public/images/placeholders/project-thumbnail.svg
- public/images/placeholders/hobby-photo.svg
- public/images/placeholders/hackathon-cover.svg
- public/images/placeholders/article-cover.svg
- public/images/placeholders/education-logo.svg
- public/images/placeholders/profile-avatar.svg

Use these placeholder files as drop-in image targets while curating real assets.

## Notes

- The app is intentionally view-heavy and animation-rich.
- Keep data models and Firebase collections aligned with src/types/index.ts.
