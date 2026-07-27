# Himanshu Sahni — Portfolio

Personal portfolio website built with modern web technologies.

**Live:** [hsahni55h.github.io](https://hsahni55h.github.io)

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router, TypeScript) |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Dark Mode | next-themes |
| Fonts | Inter + JetBrains Mono |
| Deployment | GitHub Pages (static export via GitHub Actions) |

## Project Structure

```
src/
├── app/               # Next.js App Router (layout, page, globals.css)
├── components/        # Reusable UI components
│   ├── sections/      # Page sections (Hero, About, Experience, etc.)
│   ├── navbar.tsx      # Sticky nav with mobile menu
│   ├── footer.tsx      # Footer with social links
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
├── content/           # All portfolio content data (edit here to update)
│   └── index.ts       # Experiences, projects, skills, certifications
└── lib/               # Utility functions
```

## Quick Start

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run start
```

## Content Updates

All content (experience, projects, skills, certifications, bio) is in **`src/content/index.ts`**. Edit that single file to update the site — no need to touch components.

## Roadmap

- [x] Phase 1: Next.js scaffold + Tailwind + dark mode + layout
- [x] Phase 2: All sections (Hero, About, Experience, Projects, Skills, Certs, Contact)
- [ ] Phase 3: SEO metadata, Open Graph, sitemap, responsive polish
- [ ] Phase 4: GitHub Actions CI/CD, Lighthouse audit, Dependabot
- [ ] Phase 5: License, content-from-markdown, custom domain

## License

All rights reserved. See [LICENSE](LICENSE) for details.

