# 📁 Fullstack Project Structure Guide

This file defines the folder structure conventions for fullstack projects (web or app).
Follow the relevant pattern based on project scale.

---

## 🗂️ Structure Types Overview

| Type | Best For | Complexity |
|------|----------|------------|
| **Monorepo (Layer-based)** | Solo devs, small teams, most projects | ⭐ Simple |
| **Monorepo (Feature-based)** | Large teams, complex domains | ⭐⭐ Medium |
| **Polyrepo** | Separate deployment pipelines, microservices | ⭐⭐⭐ Advanced |

---

## ✅ RECOMMENDED: Monorepo — Layer-Based Structure

> **Use this for:** Most web and mobile fullstack projects.
> Clean, predictable, easy to onboard.

```
my-project/
├── client/                         # Frontend (React / Next.js / Vue / React Native)
│   ├── public/                     # Static assets (favicon, images, fonts)
│   ├── src/
│   │   ├── components/             # Reusable, stateless UI components
│   │   │   ├── Button/
│   │   │   │   ├── Button.tsx
│   │   │   │   └── Button.test.tsx
│   │   │   └── Input/
│   │   ├── features/               # Feature-scoped components with side effects
│   │   │   ├── auth/               # Login, Register, AuthGuard
│   │   │   ├── dashboard/          # Dashboard-specific views
│   │   │   └── products/           # Product listing, detail, cart
│   │   ├── pages/ (or app/)        # Route-level page components (Next.js: app/)
│   │   ├── hooks/                  # Custom React hooks (useAuth, useFetch...)
│   │   ├── lib/                    # API clients, utility wrappers, axios instance
│   │   ├── providers/              # Context providers (ThemeProvider, AuthProvider)
│   │   ├── store/                  # Global state (Redux / Zustand / Jotai)
│   │   ├── config/                 # Env variables, constants, 3rd party config
│   │   ├── styles/                 # Global CSS, Tailwind base, theme tokens
│   │   ├── types/                  # TypeScript interfaces and type definitions
│   │   └── utils/                  # Pure helper functions (formatDate, slugify...)
│   ├── .env.local
│   └── package.json
│
├── server/                         # Backend (Node.js / Express / Fastify / NestJS)
│   ├── src/
│   │   ├── controllers/            # Request handlers — business logic entry point
│   │   │   ├── auth.controller.ts
│   │   │   ├── user.controller.ts
│   │   │   └── product.controller.ts
│   │   ├── routes/                 # Express Router definitions
│   │   │   ├── auth.routes.ts
│   │   │   ├── user.routes.ts
│   │   │   └── index.ts            # Aggregates all routes
│   │   ├── models/                 # DB schemas (Mongoose / Prisma / TypeORM)
│   │   │   ├── user.model.ts
│   │   │   └── product.model.ts
│   │   ├── middleware/             # Express middleware
│   │   │   ├── auth.middleware.ts  # JWT / session verification
│   │   │   ├── error.middleware.ts # Global error handler
│   │   │   └── rateLimit.ts
│   │   ├── services/               # Business logic layer (called by controllers)
│   │   │   ├── auth.service.ts
│   │   │   └── email.service.ts
│   │   ├── config/                 # DB connection, env config, app settings
│   │   │   ├── db.ts
│   │   │   └── env.ts
│   │   ├── utils/                  # Reusable helper functions
│   │   │   ├── jwt.ts
│   │   │   ├── hash.ts
│   │   │   └── logger.ts
│   │   ├── types/                  # Shared TypeScript types/interfaces
│   │   └── app.ts                  # Express app setup (no server.listen here)
│   ├── server.ts                   # Entry point — starts the server
│   ├── .env
│   └── package.json
│
├── shared/                         # (Optional) Shared types between client & server
│   └── types/
│       └── api.types.ts
│
├── .gitignore
├── README.md
└── structure.md                    # ← You are here
```

---

## 🧩 Monorepo — Feature-Based Structure

> **Use this for:** Large-scale apps, domain-driven design, teams with separate ownership per feature.
> Each feature is self-contained (its own components, hooks, API calls, state).

```
my-project/
├── client/
│   ├── src/
│   │   ├── features/
│   │   │   ├── auth/
│   │   │   │   ├── components/     # LoginForm, RegisterForm
│   │   │   │   ├── hooks/          # useLogin, useRegister
│   │   │   │   ├── store/          # Auth slice / atoms
│   │   │   │   ├── api/            # authApi.ts (RTK Query / axios calls)
│   │   │   │   └── types.ts
│   │   │   ├── products/
│   │   │   │   ├── components/
│   │   │   │   ├── hooks/
│   │   │   │   └── api/
│   │   │   └── checkout/
│   │   ├── shared/                 # Truly shared components, hooks, utils
│   │   │   ├── components/         # Button, Modal, Spinner
│   │   │   ├── hooks/
│   │   │   └── utils/
│   │   └── pages/                  # Thin pages that import features
│
└── server/
    ├── src/
    │   ├── modules/                # Feature modules (NestJS style or manual)
    │   │   ├── auth/
    │   │   │   ├── auth.controller.ts
    │   │   │   ├── auth.service.ts
    │   │   │   ├── auth.routes.ts
    │   │   │   └── auth.model.ts
    │   │   ├── users/
    │   │   └── products/
    │   ├── shared/
    │   │   ├── middleware/
    │   │   ├── utils/
    │   │   └── config/
    │   └── app.ts
```

---

## 📦 Polyrepo Structure

> **Use this for:** Teams deploying frontend and backend independently, microservices.

```
my-org/
├── my-project-client/              # Separate Git repository
│   └── (same as client/ above)
│
├── my-project-server/              # Separate Git repository
│   └── (same as server/ above)
│
└── my-project-infra/               # Optional: Docker, CI/CD, Terraform configs
```

---

## 📖 Folder Reference — What Goes Where

### Frontend (`client/src/`)

| Folder | Purpose | Example |
|--------|---------|---------|
| `components/` | Stateless, reusable UI pieces | `Button`, `Card`, `Input`, `Modal` |
| `features/` | Feature-scoped components with logic/side effects | `ProductList`, `AuthForm`, `UserProfile` |
| `pages/` or `app/` | Route-level views, minimal logic | `HomePage`, `DashboardPage` |
| `hooks/` | Custom React hooks | `useDebounce`, `useLocalStorage`, `useAuth` |
| `lib/` | Configured instances, wrappers | `axiosInstance.ts`, `queryClient.ts` |
| `providers/` | React context providers | `ThemeProvider`, `AuthProvider` |
| `store/` | Global state management | Redux slices, Zustand stores, Jotai atoms |
| `config/` | Constants, env access, 3rd party setup | `constants.ts`, `firebase.ts` |
| `styles/` | Global styles, CSS variables, Tailwind config | `globals.css`, `theme.ts` |
| `types/` | TypeScript types and interfaces | `User.ts`, `ApiResponse.ts` |
| `utils/` | Pure, stateless helper functions | `formatCurrency.ts`, `slugify.ts` |

### Backend (`server/src/`)

| Folder | Purpose | Example |
|--------|---------|---------|
| `controllers/` | Handle HTTP requests, call services, send responses | `auth.controller.ts` |
| `routes/` | Define URL paths and map to controllers | `POST /api/auth/login` |
| `models/` | Database schemas and model methods | `User.model.ts` (Mongoose/Prisma) |
| `middleware/` | Functions that run between request and controller | `authMiddleware`, `errorHandler` |
| `services/` | Core business logic (pure, testable) | `sendEmail()`, `hashPassword()` |
| `config/` | DB connections, environment setup | `db.ts`, `env.ts` |
| `utils/` | Shared helper functions used across modules | `generateToken()`, `logger.ts` |
| `types/` | TypeScript interfaces for request/response shapes | `AuthRequest.ts` |

---

## 🔁 Request Flow (Backend)

```
HTTP Request
    → Route          (routes/)
    → Middleware     (middleware/)  ← auth check, validation
    → Controller     (controllers/) ← parse req, call service
    → Service        (services/)    ← business logic
    → Model          (models/)      ← DB query
    → Response
```

---

## ⚡ Quick Decision Guide

```
Building a new project?
    ↓
Solo dev or small team?
    → YES → Monorepo Layer-Based  ✅ (recommended default)
    → NO  → Large team with separate feature ownership?
                → YES → Monorepo Feature-Based
                → NO  → Need independent deployments?
                            → YES → Polyrepo
                            → NO  → Monorepo Layer-Based ✅
```

---

## 🚫 Common Mistakes to Avoid

- ❌ Putting business logic in controllers — use a `services/` layer
- ❌ Importing server code in client or vice versa in a monorepo
- ❌ Dumping everything in `utils/` — if it's feature-specific, keep it in `features/`
- ❌ Skipping the `services/` layer — controllers should be thin
- ❌ Hardcoding config values — always use `config/` + `.env`
- ❌ Mixing page-level logic into reusable components

---

## 🛠️ Recommended Tech Per Layer

| Layer | Options |
|-------|---------|
| Frontend Framework | Next.js, React + Vite, Vue, React Native (mobile) |
| State Management | Zustand (simple), Redux Toolkit (complex), Jotai (atomic) |
| API Layer (client) | Axios + React Query, RTK Query, tRPC |
| Backend Framework | Express, Fastify, NestJS |
| ORM / DB Client | Prisma (recommended), Mongoose, Drizzle |
