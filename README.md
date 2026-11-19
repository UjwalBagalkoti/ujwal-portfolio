# Ujwal Bagalkoti — Portfolio

Next.js 14 (App Router) + TypeScript + Tailwind CSS + Redux Toolkit.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## What's using Redux

`lib/features/uiSlice.ts` holds two bits of global UI state:
- **theme** — light/dark, toggled from the button in the header and synced
  to the `<html>` class so Tailwind's `dark:` variants apply.
- **projectFilter** — which category chip is active in the Selected Work
  section.

## Content lives in `data/`

- `site.ts` — email, GitHub, LinkedIn.
- `experience.ts` — work experience, most recent first.
- `education.ts`, `skills.ts`, `projects.ts` — add a `repo` link to any project without one.
- `public/resume.pdf` — included; the Hero's "resume" link appears when the file exists.

## Structure

```
app/            routes, layout, global styles
components/     Hero, Projects, Experience, Education, Skills, Contact, ThemeToggle
data/           project / experience / skills content
lib/            Redux store, slice, typed hooks
```
