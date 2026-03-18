# CLAUDE.md

This file provides guidance to Claude Code when working in this repository.

## Project Overview

**mihaiplusplus** is a Next.js 16 personal website/portfolio built with React 19, TypeScript, MUI (Material UI), and Tailwind CSS v4. It includes an app router structure with multiple sections (apps, games, contact).

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **UI:** MUI v7 + Tailwind CSS v4 + Emotion
- **Language:** TypeScript 5
- **Testing:** Playwright (e2e)
- **Package Manager:** pnpm
- **Linting:** ESLint 9

## Project Structure

```
app/                  # Next.js App Router pages
  apps/               # Apps section where some practice apps will be located
  games/              # Games section where Gamemaker 2 html games will be located
  contact/            # Contact section
  layout.tsx          # Root layout
  page.tsx            # Home page
  themeProvider.tsx   # MUI theme provider
components/           # Shared React components
  appHeader.tsx
  logo.tsx
  pageLayout.tsx
playwright/           # Playwright e2e tests
  e2e/
    tests/            # Test specs
    pom/              # Page Object Models
      components/     # Component POMs (e.g. HeaderComponent)
jenkins/              # CI/CD pipeline config (legacy)
Jenkinsfile           # Jenkins declarative pipeline
scripts/              # Utility scripts
public/               # Static assets
Dockerfile            # Multi-stage Docker build (node:24-alpine, standalone output)
.dockerignore
```

## Common Commands

```bash
pnpm dev              # Start development server (http://localhost:3000)
pnpm build            # Production build
pnpm start            # Start production server
pnpm lint             # Run ESLint
pnpm test             # Run e2e tests
pnpm test:debug       # Run e2e tests with UI
pnpm docker:build     # Build Docker image
pnpm docker:run       # Run Docker container on port 3000
```

## Development Guidelines

- Use the App Router (`app/`) for all new pages and layouts
- Place reusable UI components in `components/`
- Use MUI components as the primary UI library; Tailwind for utility styling
- All new files should be TypeScript (`.tsx` / `.ts`)
- Follow existing naming conventions: camelCase for component files (e.g., `appHeader.tsx`)
- Important components have test name atributes "test-name"

## Test Names

`test-name` attributes used across the codebase for `getByTestId()` locators:

| Value | Component | Description |
|-------|-----------|-------------|
| `header` | `components/appHeader.tsx` | Top navigation bar |
| `logo` | `components/logo.tsx` | Logo link in the header |
| `nav-welcome` | `components/appHeader.tsx` | Nav button linking to Welcome page |
| `nav-contact` | `components/appHeader.tsx` | Nav button linking to Contact page |
| `nav-apps` | `components/appHeader.tsx` | Nav button linking to Apps page |
| `nav-games` | `components/appHeader.tsx` | Nav button linking to Games page |
| `content` | `components/pageLayout.tsx` | Main page content area |

## Testing Conventions

- All tests use Page Object Model
- Page objects live in `playwright/e2e/pom/`
- Component POMs live in `playwright/e2e/pom/components/`
- Each page class extends BasePage
- Use `getByRole` and `getByTestId` for locators, never CSS selectors
- Tests live in `playwright/e2e/tests/`
