# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a documentation server repository containing Next.js-based documentation sites. The primary content is in the `tailwind-plus-syntax/` directory, which contains two variants:
- **syntax-ts/**: TypeScript implementation
- **syntax-js/**: JavaScript implementation

Both variants are essentially the same documentation template with different language implementations.

## Development Commands

### TypeScript Version (syntax-ts/)
```bash
cd tailwind-plus-syntax/syntax-ts
npm install
npm run dev      # Start development server on http://localhost:3000
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

### JavaScript Version (syntax-js/)
Same commands as above, but from `tailwind-plus-syntax/syntax-js/` directory.

## Architecture

### Next.js App Router + Markdoc
The site uses Next.js 15 App Router with Markdoc for markdown processing:

- **Routing**: File-based routing in `src/app/` directory
- **Documentation pages**: Located in `src/app/docs/[category]/page.md`
- **Markdoc integration**: Configured via `next.config.mjs` with custom schema in `src/markdoc/`

### Key Architectural Components

**Markdoc Configuration** (`src/markdoc/`):
- `nodes.js`: Defines custom Markdoc nodes including document layout, headings with auto-generated IDs, and code fences
- `tags.js`: Defines custom tags like `{% callout %}`, `{% figure %}`, and `{% quick-links %}`
- `search.mjs`: Custom webpack plugin that builds search index from documentation pages

**Layout System**:
- `Layout.tsx`: Main app layout with sticky header, navigation sidebar, and responsive design
- `DocsLayout.tsx`: Documentation-specific layout that wraps markdown content, generates table of contents from H2/H3 headings, and provides prev/next navigation
- Navigation is defined in `src/lib/navigation.ts` as a static structure

**Search Implementation**:
- Uses FlexSearch library for client-side search
- Index is built at build time by scanning all `.md` files in `src/app/`
- Triggered by `⌘K` shortcut or clicking search input
- Implementation in `src/components/Search.tsx` using Algolia Autocomplete for UI

**Section & TOC Generation** (`src/lib/sections.ts`):
- Parses Markdoc AST to extract H2 and H3 headings
- Generates slugified IDs for anchor links
- Creates nested table of contents structure

### Import Paths
Uses `@/*` alias for `src/` directory (configured in tsconfig.json/jsconfig.json).

### Styling
- Tailwind CSS v4 with PostCSS
- Prettier configured with `prettier-plugin-tailwindcss` for class sorting
- Single quotes, no semicolons (see `prettier.config.js`)
- Typography plugin for prose content (`@tailwindcss/typography`)

## Documentation Content Structure

Documentation pages use frontmatter + markdown:

```markdown
---
title: Page Title
---

Page content here {% .lead %}

{% callout type="warning" %}
Important note
{% /callout %}

{% quick-links %}
{% quick-link title="..." icon="..." href="..." description="..." /%}
{% /quick-links %}
```

**Custom Markdoc tags**:
- `{% callout type="note|warning" %}`: Highlighted callout boxes
- `{% figure src="..." alt="..." caption="..." /%}`: Images with captions
- `{% quick-links %}` + `{% quick-link %}`: Icon link grids on landing pages

## Important Implementation Details

1. **Navigation updates**: When adding new doc pages, update `src/lib/navigation.ts` to include them in the sidebar navigation

2. **Search indexing**: The search automatically indexes new pages at build time - no manual configuration needed

3. **Heading IDs**: All H2-H6 headings automatically get slugified IDs for anchor linking

4. **Theme support**: The site includes dark mode via `next-themes` package with a theme selector component

5. **Parallel implementations**: When making changes, consider whether both syntax-ts/ and syntax-js/ need updates

## Dependencies

**Core**:
- Next.js 15 (React 19)
- Markdoc for markdown processing
- Tailwind CSS v4

**Key libraries**:
- FlexSearch: Client-side search
- Algolia Autocomplete: Search UI
- Headless UI: Unstyled accessible components
- prism-react-renderer: Syntax highlighting
- next-themes: Theme switching
