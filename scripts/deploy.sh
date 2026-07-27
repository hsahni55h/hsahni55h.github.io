#!/usr/bin/env bash
# © 2024-2026 Himanshu Sahni. Licensed under CC BY-NC 4.0.
# https://github.com/hsahni55h/hsahni55h.github.io — Attribution required.
#
# deploy.sh — Stage, commit, and push changes to GitHub in one command.
#
# Usage:
#   ./scripts/deploy.sh "your commit message"
#
# What it does:
#   1. Runs lint + type-check + build (preflight checks)
#   2. Stages all changes
#   3. Commits with your message
#   4. Pushes to main branch
#
# If any step fails, it stops immediately and tells you what went wrong.
# Your live site is never affected by failed local checks.

set -euo pipefail

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# ─── Check commit message ───────────────────────────────────────────
if [ $# -eq 0 ]; then
  echo -e "${RED}Error: Please provide a commit message.${NC}"
  echo ""
  echo "Usage: ./scripts/deploy.sh \"your commit message\""
  echo ""
  echo "Examples:"
  echo "  ./scripts/deploy.sh \"content: update work experience\""
  echo "  ./scripts/deploy.sh \"feat: add blog section\""
  echo "  ./scripts/deploy.sh \"fix: mobile nav not closing\""
  exit 1
fi

COMMIT_MSG="$1"

# ─── Navigate to project root ───────────────────────────────────────
cd "$(dirname "$0")/.."

echo ""
echo -e "${BLUE}╔══════════════════════════════════════╗${NC}"
echo -e "${BLUE}║     Portfolio Deploy Pipeline        ║${NC}"
echo -e "${BLUE}╚══════════════════════════════════════╝${NC}"
echo ""

# ─── Step 1: Preflight checks ───────────────────────────────────────
echo -e "${YELLOW}[1/5] Running ESLint...${NC}"
npm run lint
echo -e "${GREEN}  ✓ Lint passed${NC}"
echo ""

echo -e "${YELLOW}[2/5] Checking TypeScript types...${NC}"
npx tsc --noEmit
echo -e "${GREEN}  ✓ TypeScript passed${NC}"
echo ""

echo -e "${YELLOW}[3/5] Building production site...${NC}"
npm run build
echo -e "${GREEN}  ✓ Build passed${NC}"
echo ""

# ─── Step 2: Git operations ─────────────────────────────────────────
echo -e "${YELLOW}[4/5] Staging & committing...${NC}"
git add -A

# Show what's being committed
echo ""
echo "  Files to commit:"
git diff --cached --stat | sed 's/^/    /'
echo ""

git commit -m "$COMMIT_MSG"
echo -e "${GREEN}  ✓ Committed: \"$COMMIT_MSG\"${NC}"
echo ""

echo -e "${YELLOW}[5/5] Pushing to GitHub...${NC}"
git push origin main
echo -e "${GREEN}  ✓ Pushed to main${NC}"
echo ""

# ─── Done ────────────────────────────────────────────────────────────
echo -e "${GREEN}╔══════════════════════════════════════╗${NC}"
echo -e "${GREEN}║     ✓ Deploy complete!               ║${NC}"
echo -e "${GREEN}╚══════════════════════════════════════╝${NC}"
echo ""
echo "  Your site will be live in ~2 minutes at:"
echo -e "  ${BLUE}https://hsahni55h.github.io${NC}"
echo ""
echo "  Check deploy status:"
echo -e "  ${BLUE}https://github.com/hsahni55h/hsahni55h.github.io/actions${NC}"
echo ""
