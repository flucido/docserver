# AGENTS.md

## Build/Lint/Test Commands
- Build: `npm run build` (Next.js build)
- Lint: `npm run lint` (ESLint with Next.js config)
- Dev: `npm run dev` (starts dev server)
- Test: No test scripts available; no single test command

## Code Style Guidelines
- **Linting**: Use ESLint config extending "next/core-web-vitals"
- **Formatting**: Prettier with single quotes, no semicolons, Tailwind CSS plugin
- **Imports**: Use "@/*" alias for src/ directory paths
- **Types**: TypeScript in syntax-ts/, JavaScript in syntax-js/
- **Naming**: PascalCase for React components, camelCase for functions/variables
- **Error Handling**: Follow standard React/Next.js patterns (try/catch in async, prop validation)
- **Other**: No specific Cursor or Copilot rules found; follow Next.js best practices

## Document Structure
- **Organization**: Docs in src/app/docs/[category]/page.md using Next.js App Router and Markdoc for markdown processing.
- **Format**: Frontmatter for title/metadata, markdown content with sections, custom Markdoc tags (e.g., callout, figure, quick-links) for components.
- **Lessons for Projects**: Use App Router for routing, Markdoc for rich markdown with custom tags, organize docs in subdirectories for scalability.