# Personal Portfolio Website

Portfolio of Tanveer Singh, built with React, TypeScript, Vite and Firebase.

**Live site:** https://portfolio-main-one-pi.vercel.app

## Project structure

```
website/
├── client/
│   ├── data/     → all website content: text, links, pictures, PDFs
│   ├── src/      → website code
│   └── firestore.rules
└── .github/      → automatic checks on every push
```

## Updating the website

Edit the files in [`client/data`](./client/data). Its [README](./client/data/README.md) explains
each one. Pushing to `main` publishes the site through Vercel.

## Running it locally

```bash
cd client
npm install
npm run dev
```

See [`client/README.md`](./client/README.md) for the Firebase setup.
