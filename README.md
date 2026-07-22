# rahulreza920.github.io/Portfolio

Personal portfolio and blog for Rahul Reza Roky — Backend Software Engineer @ Pathao.

Built with [Astro](https://astro.build): static output, monochrome minimal design, Medium posts pulled in at build time, and a native blog ready for first-party posts.

## Structure

```
src/
├── components/     Hero, Experience, Projects, Writing, Publications, Certificates, Contact
├── content/blog/   Markdown blog posts (content collection)
├── layouts/        Base.astro (shared head/meta)
├── lib/            data.ts (static content), medium.ts (RSS fetch), url.ts (base-path helper)
├── pages/          index.astro, blog/index.astro, blog/[slug].astro
└── styles/         global.css (design system)
```

## Commands

| Command           | Action                                      |
| :----------------- | :------------------------------------------ |
| `npm install`      | Install dependencies                        |
| `npm run dev`      | Start dev server at `localhost:4321`        |
| `npm run build`    | Build static site to `./dist/`              |
| `npm run preview`  | Preview the production build locally        |

## Writing a new blog post

Add a Markdown file to `src/content/blog/` with frontmatter:

```md
---
title: 'Post title'
description: 'One-line summary'
date: 2026-01-01
---

Post content here.
```

It will automatically appear on `/blog` and in the homepage Writing section.

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds with Astro and deploys to GitHub Pages. Enable **Settings → Pages → Source: GitHub Actions** on the repo once first pushed.
