## Project overview

### What this is
- A **mobile-first PWA** built with **React + TypeScript** (Vite).
- UI uses **TailwindCSS** and **shadcn/ui** components.
- The project also uses a **shadcn MCP server** for component/workflow assistance.

### High-level goals
- Fast, responsive, accessible mobile UX first; desktop is a progressive enhancement.
- Maintainable component architecture with consistent styling and minimal bespoke CSS.

### Stack & conventions
- Build tool: **Vite**
- UI: **React**, **shadcn/ui**, **TailwindCSS**
- Language: **TypeScript** (preferred everywhere)
- Lint/format: use existing repo config (ESLint/Prettier if present)


## Code style guidelines

### TypeScript & React
- Prefer **TypeScript** for all new/modified files.
- Use **functional components** and **hooks**.
- Prefer **composition** over inheritance and avoid overly clever abstractions.
- Keep components small: if a component exceeds ~200 lines, consider splitting.
- Avoid `any`; prefer proper types, `unknown`, or generics when needed.

### File naming
- React components: `kebab-case.tsx`
- Hooks: `kebab-case.ts`
- Utilities: `kebab-case.ts` (match existing repo)
- Route/screen components: consistent naming per router setup

### Formatting & linting
- Follow repo ESLint/Prettier config.
- Do not reformat unrelated files.
- Keep diffs minimal and focused.

### TailwindCSS
- Use Tailwind utility classes for styling.
- Keep class lists readable:
  - group related concerns (layout → spacing → typography → colors → effects)
  - avoid deeply nested conditional strings; use helper utilities if present (e.g., `cn()`).
- Prefer design tokens already used in the project (CSS variables / theme classes) rather than hard-coded colors.
- Avoid custom CSS unless necessary; if needed, keep it scoped and documented.

### shadcn/ui usage
- Use shadcn MCP for getting details of up-to-dated components.
- Prefer **composing** shadcn components rather than rewriting them.
- If adding a new shadcn component:
  - match existing component location and import style
  - keep variants consistent with the design system
- Avoid modifying generated shadcn component internals unless required.

### Mobile-first UX (must-follow)
- Start layouts from small screens; add responsive modifiers (`sm:`, `md:`…) only as enhancements.
- Keep tap targets large enough; avoid tiny icon-only buttons without accessible labels.
- Be mindful of performance on mid/low-end devices (avoid heavy re-renders, huge images).

### State, data fetching, and side effects
- Keep side effects in hooks; keep components mostly presentational when possible.
- Do not introduce a new state library without a strong reason.

### Error handling
- Handle loading/error/empty states for all async UI.
- Avoid noisy console logs.

## Guidance for Codex workflows

### How to approach tasks
- **Locate the existing pattern** in the codebase first (similar component/screen).

### MCP / shadcn MCP server notes
- You may use the shadcn MCP server to:
  - scaffold or suggest shadcn components
  - recommend consistent Tailwind patterns/variants
- Always adapt generated output to match:
  - existing folder structure
  - import aliases
  - theme tokens and component conventions
- Do not add components or dependencies that conflict with the current stack.

## Guardrails
- Do not add new major dependencies without clear need.
- Do not change routing/state management approach unless explicitly requested.
- Keep changes scoped; avoid drive-by refactors.
