# EaseOrigin

Corporate website for EaseOrigin LLC, a technology consulting firm working in
federal cloud, platform, and security engineering.

**Proprietary. All rights reserved. See [LICENSE](./LICENSE).** This repository
is not open source and carries no license to use, copy, or redistribute it.

## Stack

- Next.js 16 (App Router)
- React 19, TypeScript
- Tailwind CSS
- MongoDB via Mongoose, for the admin-managed job, application, and blog records
- NextAuth for admin authentication
- AWS S3 for uploads
- Deployed on Vercel

Public marketing content is not in a CMS. It lives in `src/data/*.ts` and is
edited in the repo.

## Running it

```bash
npm install
npm run dev
```

The site comes up on http://localhost:3000.

```bash
npm run build    # production build
npm run lint     # eslint
```

A note if you work on a Windows mount. The `node_modules/.bin` shims land as
zero-byte files on OneDrive and NTFS, because npm creates them as symlinks and
the mount cannot. Anything run through those shims exits 0 without doing
anything, so `npx tsc` and `npx next build` will look like they passed when
they never ran. Invoke the real entry points instead:

```bash
node node_modules/typescript/bin/tsc --noEmit
node node_modules/next/dist/bin/next build
```

## Environment

Copy `.env.example` to `.env.local` and fill it in. It covers the MongoDB
connection string, NextAuth secret and URL, AWS S3 credentials and bucket, and
the mail transport. Nothing runs without them.

`.gitignore` covers `.env*`, so `.env.example` is untracked too. Get it from
another developer rather than expecting it in a fresh clone. Never commit a
real `.env`.

There is also a Docker dev setup that builds from this repo. It lives outside
this repository, in the operations workspace, and uses polling file watchers
because inotify does not cross a Windows mount.

## Layout

```
src/app/(public)/    public pages
src/app/admin/       admin dashboard, auth-gated
src/app/api/         route handlers
src/components/      UI, sections, shared layout
src/data/            marketing content and company facts
src/models/          Mongoose schemas
```

## Editing public claims

`src/data/company-info.ts` holds the company facts, the program attribution
notice, and the clearance and trademark language. Pages import from there rather
than hardcoding, so a claim gets corrected in one place.

Two rules on this site, both load-bearing:

1. **Anything checkable has to be true.** Program experience is attributed to
   the organization that actually held the contract. EaseOrigin holds no
   contract vehicles and the site says so. No testimonials, no counts that
   cannot be sourced on request.
2. **No government seals or third-party logos.** Agency seals are
   reproduction-restricted, and company marks need written permission. Named
   organizations appear as text only.

## Third-party software

See [THIRD-PARTY-LICENSES.md](./THIRD-PARTY-LICENSES.md).
