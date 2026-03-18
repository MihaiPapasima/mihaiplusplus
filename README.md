# mihaiplusplus

Personal website and portfolio built with Next.js 16, React 19, TypeScript, MUI, and Tailwind CSS v4.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **UI:** MUI v7 + Tailwind CSS v4 + Emotion
- **Language:** TypeScript 5
- **Testing:** Playwright (e2e)
- **Package Manager:** pnpm

## Getting Started

Install dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Commands

```bash
pnpm dev          # Start development server
pnpm build        # Production build
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm test         # Run e2e tests
pnpm test:debug   # Run e2e tests with UI
```

## Docker

```bash
pnpm docker:build   # Build the Docker image
pnpm docker:run     # Run the container on http://localhost:3000
```

Or directly:

```bash
docker build -t mihaiplusplus .
docker run -p 3000:3000 mihaiplusplus
```

## Project Structure

```
app/                  # Next.js App Router pages
  apps/               # Apps section
  games/              # Games section
  contact/            # Contact section
  layout.tsx
  page.tsx
components/           # Shared React components
  appHeader.tsx
  logo.tsx
  pageLayout.tsx
playwright/           # Playwright e2e tests
  e2e/
    tests/            # Test specs
    pom/              # Page Object Models
      components/     # Component POMs
public/               # Static assets
```

## Testing

Tests require the dev server to be running. Start it with `pnpm dev`, then in a separate terminal:

```bash
pnpm test
```

Page objects are located in `playwright/e2e/pom/` and follow the Page Object Model pattern. Each page class extends `BasePage` and uses `getByTestId` and `getByRole` for locators.
