# Portfolio Main (Client)

Cinematic engineering portfolio built with React, TypeScript, Framer Motion, and Firebase.

**To change anything the site shows, edit [`data/`](./data/README.md).** No code changes are needed.

## Tech Stack

- React 19, TypeScript, Vite
- Framer Motion, React Router
- Firebase Auth + Firestore (admin inbox only)

## Project Structure

```text
data/                  all content, pictures and PDFs
src/
  components/          reusable UI, including effects/
  config/content.ts    reads data/: hides drafts, builds the menu
  config/firebase.ts   Firebase connection
  features/            one folder per website section
  layouts/ pages/      page shells and routes
firestore.rules        who can read and write messages
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

Avoid `npm audit fix`: it can install a second copy of `@firebase/app`, which crashes the admin
page with "Component auth has not been registered yet". Update packages by name
instead, then check that `npm ls @firebase/app` shows only one version.

## Firebase Setup

The site works without Firebase, except for `/admin`.

1. Copy `.env.example` to `.env.local` and fill in the values from the Firebase Console.
2. Add the same values in Vercel under Project > Settings > Environment Variables, then redeploy.
3. Deploy the security rules:

   ```bash
   firebase deploy --only firestore:rules --project YOUR_PROJECT_ID
   ```

4. Make yourself an admin: sign in at `/admin` and copy the User ID it shows. Then in the Firebase
   Console, open Firestore Database and create a collection named `admins` containing a document
   whose ID is that User ID. The document needs no fields.
