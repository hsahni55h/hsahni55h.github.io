# Development, Testing & Deployment Guide

> **Private reference for Himanshu Sahni.**
> This file contains setup instructions, development workflows, and deployment procedures.

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

Or run the setup script which does all of the above automatically:

```bash
./scripts/setup.sh
```

If all commands pass, you're ready to make changes.

---

## ✏️ Making Changes

### Updating Portfolio Content (experiences, projects, skills, etc.)

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

### Updating Your CV/Resume

Replace the PDF files in the `public/` folder:

```bash
cp /path/to/your/new/Himanshu_CV.pdf public/Himanshu_CV.pdf
cp /path/to/your/new/Himanshu_Resume.pdf public/Himanshu_Resume.pdf
```

### Updating Your Profile Photo

Replace the image in `public/images/`:

```bash
cp /path/to/your/new/photo.jpg public/images/profile.jpg
```

### Modifying the Design (components)

Components are in `src/components/`. Edit the relevant `.tsx` file.

---

## 👀 Previewing Changes Locally

### Start the Dev Server (live reload)

```bash
npm run dev
```

Open **http://localhost:3000** in your browser. Every time you save a file, the browser refreshes automatically. Press `Ctrl+C` to stop.

### Preview the Production Build

```bash
# Build the static site
npm run build

# Serve the built files locally
npx serve out
```

Open **http://localhost:3000** — this is exactly what your live site will look like.

---

## 🧪 Testing BEFORE Deploying

**ALWAYS run checks before pushing:**

### Option A: One command (recommended)

```bash
npm run preflight
```

This runs: ESLint → TypeScript type-check → production build.

### Option B: Manual steps

```bash
npm run lint           # Check for code errors
npx tsc --noEmit       # Check TypeScript types
npm run build          # Build production site
```

If ANY step fails, fix the errors before committing.

---

## 📤 Deploying to Live Site

### Option A: One-command deploy (recommended)

```bash
./scripts/deploy.sh "your commit message here"
```

This does everything: preflight checks → stage → commit → push → deploy.

### Option B: Manual steps

```bash
# 1. Stage your changes
git add -A

# 2. Commit (Husky will auto-run lint + type-check)
git commit -m "content: update work experience"

# 3. Push to GitHub (triggers automatic deploy)
git push origin main
```

**What happens after you push:**

1. GitHub Actions checks out your code
2. Runs `npm ci` → `npm run lint` → `npm run build`
3. If build passes → deploys to GitHub Pages
4. Site is live at [hsahni55h.github.io](https://hsahni55h.github.io) within ~2 minutes
5. If build FAILS → old site stays live, you get an email notification

---

## 🔧 Commit Message Prefixes

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
npx tsc --noEmit    # See exact errors
# Fix them, then rebuild
npm run build
```

### Commit is rejected by Husky

The pre-commit hook found errors. Read the error output — it tells you which file and line. Fix it and commit again.

### GitHub Actions build fails (red ❌)

1. Go to [Actions tab](https://github.com/hsahni55h/hsahni55h.github.io/actions)
2. Click the failed run → click the failed step → read the error
3. Fix locally → push again
4. Your live site is NOT affected — the old version stays live

### Port 3000 already in use

```bash
lsof -ti:3000 | xargs kill -9
# Or use a different port
npm run dev -- -p 3001
```

### Changes not showing on live site

- Wait 2-3 minutes for GitHub Actions to deploy
- Hard refresh: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)
- Check [Actions tab](https://github.com/hsahni55h/hsahni55h.github.io/actions) to see if deploy succeeded

---

## 📊 Monitoring & Analytics

- **Google Analytics:** [analytics.google.com](https://analytics.google.com) — visitors, traffic sources, geography
- **GitHub Actions:** [Actions tab](https://github.com/hsahni55h/hsahni55h.github.io/actions) — build/deploy status
- **Dependabot:** Automatically creates PRs for dependency updates every Monday
