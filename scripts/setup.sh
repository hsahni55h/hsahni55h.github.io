#!/usr/bin/env bash
# © 2024-2026 Himanshu Sahni. Licensed under CC BY-NC 4.0.
# https://github.com/hsahni55h/hsahni55h.github.io — Attribution required.
#
# setup.sh — One-command setup for a fresh machine.
#
# Usage:
#   ./scripts/setup.sh
#
# What it does:
#   1. Checks that Node.js, npm, and Git are installed
#   2. Installs all npm dependencies
#   3. Sets up Husky pre-commit hooks
#   4. Runs lint + build to verify everything works
#   5. Prints a summary of available commands

set -euo pipefail

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

cd "$(dirname "$0")/.."

echo ""
echo -e "${BLUE}╔══════════════════════════════════════╗${NC}"
echo -e "${BLUE}║   Portfolio — New Machine Setup      ║${NC}"
echo -e "${BLUE}╚══════════════════════════════════════╝${NC}"
echo ""

# ─── Check prerequisites ────────────────────────────────────────────
echo -e "${YELLOW}Checking prerequisites...${NC}"
echo ""

MISSING=0

# Check Node.js
if command -v node &>/dev/null; then
  NODE_VERSION=$(node -v)
  NODE_MAJOR=$(echo "$NODE_VERSION" | sed 's/v//' | cut -d. -f1)
  if [ "$NODE_MAJOR" -ge 20 ]; then
    echo -e "  ${GREEN}✓${NC} Node.js $NODE_VERSION"
  else
    echo -e "  ${RED}✗${NC} Node.js $NODE_VERSION (need v20+)"
    echo -e "    Install: ${BLUE}https://nodejs.org/${NC} or ${BLUE}brew install node${NC}"
    MISSING=1
  fi
else
  echo -e "  ${RED}✗${NC} Node.js not found"
  echo -e "    Install: ${BLUE}https://nodejs.org/${NC} or ${BLUE}brew install node${NC}"
  MISSING=1
fi

# Check npm
if command -v npm &>/dev/null; then
  echo -e "  ${GREEN}✓${NC} npm $(npm -v)"
else
  echo -e "  ${RED}✗${NC} npm not found (should come with Node.js)"
  MISSING=1
fi

# Check Git
if command -v git &>/dev/null; then
  echo -e "  ${GREEN}✓${NC} Git $(git --version | awk '{print $3}')"
else
  echo -e "  ${RED}✗${NC} Git not found"
  echo -e "    Install: ${BLUE}brew install git${NC}"
  MISSING=1
fi

# Check GitHub CLI (optional but recommended)
if command -v gh &>/dev/null; then
  echo -e "  ${GREEN}✓${NC} GitHub CLI $(gh --version | head -1 | awk '{print $3}')"
else
  echo -e "  ${YELLOW}○${NC} GitHub CLI not found (optional but recommended)"
  echo -e "    Install: ${BLUE}brew install gh${NC}"
fi

echo ""

if [ "$MISSING" -eq 1 ]; then
  echo -e "${RED}Please install the missing tools above and run this script again.${NC}"
  exit 1
fi

# ─── Install dependencies ───────────────────────────────────────────
echo -e "${YELLOW}Installing npm dependencies...${NC}"
npm install
echo -e "${GREEN}  ✓ Dependencies installed${NC}"
echo ""

# ─── Verify Husky hooks ─────────────────────────────────────────────
echo -e "${YELLOW}Verifying pre-commit hooks...${NC}"
if [ -f ".husky/pre-commit" ]; then
  echo -e "${GREEN}  ✓ Husky pre-commit hook is set up${NC}"
else
  echo -e "${YELLOW}  ○ Setting up Husky...${NC}"
  npx husky
  echo -e "${GREEN}  ✓ Husky initialized${NC}"
fi
echo ""

# ─── Run lint ────────────────────────────────────────────────────────
echo -e "${YELLOW}Running ESLint...${NC}"
npm run lint
echo -e "${GREEN}  ✓ Lint passed — no code errors${NC}"
echo ""

# ─── Run build ───────────────────────────────────────────────────────
echo -e "${YELLOW}Building production site...${NC}"
npm run build
echo -e "${GREEN}  ✓ Build passed — site compiles correctly${NC}"
echo ""

# ─── Summary ─────────────────────────────────────────────────────────
echo -e "${GREEN}╔══════════════════════════════════════╗${NC}"
echo -e "${GREEN}║     ✓ Setup complete!                ║${NC}"
echo -e "${GREEN}╚══════════════════════════════════════╝${NC}"
echo ""
echo "  Available commands:"
echo ""
echo -e "  ${BLUE}npm run dev${NC}           Start dev server (http://localhost:3000)"
echo -e "  ${BLUE}npm run build${NC}         Build production site"
echo -e "  ${BLUE}npm run lint${NC}          Check for code errors"
echo -e "  ${BLUE}npm run preflight${NC}     Run lint + type-check + build (all checks)"
echo -e "  ${BLUE}npx serve out${NC}         Preview production build locally"
echo ""
echo "  Helper scripts:"
echo ""
echo -e "  ${BLUE}./scripts/deploy.sh \"msg\"${NC}   Preflight → commit → push → deploy"
echo ""
echo "  Edit portfolio content:"
echo ""
echo -e "  ${BLUE}src/content/index.ts${NC}  All text content (experiences, projects, etc.)"
echo -e "  ${BLUE}public/${NC}               PDFs, images, videos"
echo ""
echo "  Quick start:"
echo ""
echo -e "  ${BLUE}npm run dev${NC}   ← start here, open http://localhost:3000"
echo ""
