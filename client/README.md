# Portfolio Main (Client)

Cinematic engineering portfolio built with React, TypeScript and Framer Motion.

**To change anything the site shows, edit [`data/`](./data/README.md).** No code changes are needed.

## Tech Stack

- React 19, TypeScript, Vite
- Framer Motion, React Router

## Project Structure

```text
data/                  all content, pictures and PDFs
src/
  components/          reusable UI, including effects/
  config/content.ts    reads data/: hides drafts, builds the menu
  features/            one folder per website section
  layouts/ pages/      page shells and routes
vercel.json            sends every page address to the app
```

## Local Development

```bash
npm install
npm run dev       # start the dev server
npm run lint      # check the code
npm run build     # type-check and build for production
npm run preview   # serve the production build
```
