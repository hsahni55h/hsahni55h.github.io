# Himanshu Sahni — Portfolio

Personal portfolio website built with modern web technologies.

**Live:** [hsahni55h.github.io](https://hsahni55h.github.io)

---

## Tech Stack

| Layer        | Technology                                      |
| ------------ | ----------------------------------------------- |
| Framework    | Next.js 16 (App Router, TypeScript)             |
| Styling      | Tailwind CSS v4                                 |
| Animations   | Framer Motion                                   |
| Dark Mode    | next-themes                                     |
| Fonts        | Inter + JetBrains Mono                          |
| Deployment   | GitHub Pages (static export via GitHub Actions) |
| CI/CD        | GitHub Actions (lint → build → deploy)          |
| Code Quality | ESLint + Prettier + Husky pre-commit hooks      |
| Monitoring   | Google Analytics 4                              |
| License      | CC BY-NC 4.0                                    |

---

## Project Structure

```
src/
├── app/               # Next.js App Router
│   ├── layout.tsx     # Root layout (fonts, metadata, GA4, theme)
│   ├── page.tsx       # Main page (composes all sections)
│   ├── globals.css    # Tailwind imports, CSS variables, dark mode
│   └── icon.svg       # Favicon
├── components/        # Reusable UI components
│   ├── sections/      # Page sections
│   │   ├── hero.tsx           # Typing animation, gradient, CTA
│   │   ├── about.tsx          # Bio, photo, CV/Resume downloads
│   │   ├── experience.tsx     # Timeline of work experience
│   │   ├── projects.tsx       # Project cards with videos
│   │   ├── skills.tsx         # Skill categories
│   │   ├── certifications.tsx # Certification cards
│   │   └── contact.tsx        # Contact links
│   ├── navbar.tsx      # Sticky nav with mobile hamburger menu
│   ├── footer.tsx      # Footer with social links + license
│   ├── theme-provider.tsx  # Dark/light mode provider
│   └── theme-toggle.tsx    # Sun/moon toggle button
├── content/
│   └── index.ts       # ⭐ ALL portfolio content — edit this to update
└── lib/
    └── utils.ts       # Utility functions
public/
├── images/            # Profile photo, project images, OG image
├── Himanshu_CV.pdf    # CV download
├── Himanshu_Resume.pdf # Resume download
├── robots.txt
├── sitemap.xml
└── .nojekyll          # Required for GitHub Pages
```

---

## 🚀 Setting Up on a New Machine (Step-by-Step)

### Prerequisites

You need these installed BEFORE you start:

| Tool           | Required Version | Check with     | Install                                                   |
| -------------- | ---------------- | -------------- | --------------------------------------------------------- |
| **Node.js**    | 20 or higher     | `node -v`      | [nodejs.org](https://nodejs.org/) or `brew install node`  |
| **npm**        | 10 or higher     | `npm -v`       | Comes with Node.js                                        |
| **Git**        | Any recent       | `git -v`       | `brew install git` or [git-scm.com](https://git-scm.com/) |
| **GitHub CLI** | Any recent       | `gh --version` | `brew install gh`                                         |

### Step 1: Authenticate with GitHub

```bash
# Login with your personal GitHub account
gh auth login --web

# Select: GitHub.com → HTTPS → Login with browser
# Follow the browser prompt to authenticate

# Verify you're logged in as hsahni55h
gh auth status
```

### Step 2: Clone the Repository

```bash
# Choose where you want the project (e.g., home directory)
cd ~

# Clone the repo
git clone https://github.com/hsahni55h/hsahni55h.github.io.git portfolio

# Enter the project
cd portfolio
```

### Step 3: Install Dependencies

```bash
# Install all packages (uses exact versions from lockfile)
npm install

# This also sets up Husky pre-commit hooks automatically
# (the "prepare" script runs "husky" on install)
```

### Step 4: Verify Everything Works

```bash
# Run the linter — should print nothing (no errors)
npm run lint

# Build the production site — should complete without errors
npm run build

# Start the dev server
npm run dev

# Open http://localhost:3000 in your browser
# You should see the portfolio. Press Ctrl+C to stop.
```

If all 3 commands pass, you're ready to make changes.

---

## ✏️ Making Changes (Daily Workflow)

### To Update Portfolio Content (experiences, projects, skills, etc.)

The **only file** you need to edit for content updates:

```
src/content/index.ts
```

This file contains all your data as TypeScript objects. Example — to add a new job:

```typescript
// In the experiences array, add a new entry at the top:
{
  company: "New Company Name",
  role: "Your New Role",
  period: "Jan 2026 – Present",
  location: "City, Country",
  description: [
    "First bullet point about what you did",
    "Second bullet point about achievements",
  ],
}
```

### To Update Your CV/Resume

Replace the PDF files in the `public/` folder:

```bash
cp /path/to/your/new/Himanshu_CV.pdf public/Himanshu_CV.pdf
cp /path/to/your/new/Himanshu_Resume.pdf public/Himanshu_Resume.pdf
```

### To Update Your Profile Photo

Replace the image in `public/images/`:

```bash
cp /path/to/your/new/photo.jpg public/images/profile.jpg
```

### To Modify the Design (components)

Components are in `src/components/`. Edit the relevant `.tsx` file.
Use `npm run dev` to see changes live in your browser.

---

## 🧪 Testing Locally BEFORE Pushing

**ALWAYS follow this workflow before pushing any changes:**

### Option A: Use the helper script (recommended)

```bash
# This runs lint → type-check → build in one command
npm run preflight
```

### Option B: Manual steps

```bash
# Step 1: Check for code errors
npm run lint

# Step 2: Check TypeScript types compile
npx tsc --noEmit

# Step 3: Build the production site
npm run build

# Step 4: Preview the production build locally
npx serve out
# Open http://localhost:3000 and verify everything looks right
# Press Ctrl+C to stop
```

If ANY step fails, fix the errors before committing.

---

## 📤 Committing & Deploying

### Step 1: Stage your changes

```bash
# See what files you changed
git status

# Stage all changes
git add -A

# Or stage specific files only
git add src/content/index.ts
```

### Step 2: Commit

```bash
git commit -m "content: update work experience"
```

> **What happens automatically:**
> Husky runs `lint-staged` which:
>
> - Runs ESLint + TypeScript check on `.ts/.tsx` files
> - Runs Prettier on `.json/.css/.md` files
> - If anything fails → commit is BLOCKED (fix errors first)

### Step 3: Push to GitHub

```bash
git push origin main
```

> **What happens automatically on GitHub:**
>
> 1. GitHub Actions checks out your code
> 2. Runs `npm ci` → `npm run lint` → `npm run build`
> 3. If build passes → deploys to GitHub Pages
> 4. Site is live at [hsahni55h.github.io](https://hsahni55h.github.io) within ~2 minutes
> 5. If build FAILS → old site stays live, you get an email notification

### Quick Deploy (all-in-one)

```bash
# Use the helper script for stage → commit → push
./scripts/deploy.sh "your commit message here"
```

---

## 🔧 Common Commit Message Prefixes

| Prefix     | Use when                                     |
| ---------- | -------------------------------------------- |
| `content:` | Updating text, experiences, projects, skills |
| `feat:`    | Adding new features or sections              |
| `fix:`     | Fixing bugs                                  |
| `style:`   | CSS/design changes                           |
| `chore:`   | Dependency updates, config changes           |
| `docs:`    | README or documentation updates              |

Examples:

```bash
git commit -m "content: add Volvo work experience"
git commit -m "feat: add blog section"
git commit -m "fix: mobile nav not closing on click"
git commit -m "style: update hero gradient colors"
```

---

## 🛠 Troubleshooting

### "npm install" fails

```bash
# Delete node_modules and lockfile, reinstall fresh
rm -rf node_modules package-lock.json
npm install
```

### "npm run lint" shows errors

```bash
# Auto-fix what ESLint can fix
npx eslint --fix .

# Remaining errors must be fixed manually
```

### "npm run build" fails with TypeScript errors

```bash
# See the exact errors
npx tsc --noEmit

# Fix the errors in the files shown, then rebuild
npm run build
```

### Commit is rejected by Husky

The pre-commit hook found errors. Read the error output carefully — it tells you exactly which file and line has the issue. Fix it and try committing again.

### GitHub Actions build fails (red ❌ on GitHub)

1. Go to [github.com/hsahni55h/hsahni55h.github.io/actions](https://github.com/hsahni55h/hsahni55h.github.io/actions)
2. Click the failed run → click the failed step → read the error
3. Fix locally → push again
4. Your live site is NOT affected — the old version stays live

### Port 3000 already in use

```bash
# Kill whatever is using port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
npm run dev -- -p 3001
```

### Changes not showing on live site

- Wait 2-3 minutes for GitHub Actions to deploy
- Hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
- Check [Actions tab](https://github.com/hsahni55h/hsahni55h.github.io/actions) to see if deploy succeeded

---

## 📊 Monitoring & Analytics

- **Google Analytics:** [analytics.google.com](https://analytics.google.com) — view visitors, traffic sources, geography
- **GitHub Actions:** [Actions tab](https://github.com/hsahni55h/hsahni55h.github.io/actions) — check build/deploy status
- **Dependabot:** Automatically creates PRs for dependency updates every Monday

---

## License

Code: [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/) — Attribution required, no commercial use.
Personal content (text, images, videos, résumé): © Himanshu Sahni — All rights reserved.
