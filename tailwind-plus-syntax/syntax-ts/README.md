# Lucido Technology Consulting - Documentation Site

This is the Next.js-powered documentation site for **Lucido Technology Consulting**, showcasing our data pipeline and API integration services for educational institutions.

Built with the [Tailwind Plus](https://tailwindcss.com/plus) Syntax template using [Tailwind CSS](https://tailwindcss.com) and [Next.js](https://nextjs.org).

---

## 🎯 About This Site

This documentation site serves as both a portfolio and technical reference for Lucido Technology Consulting's data engineering services. It demonstrates:

- **Professional Branding** - Custom LTC hero section with background imagery
- **Comprehensive Documentation** - API references, guides, and development resources
- **Modern Architecture** - Next.js 14+ App Router with TypeScript
- **Developer Experience** - Fast search, syntax highlighting, and responsive design

---

## 🚀 Getting Started

### Installation

Install the npm dependencies:

```bash
npm install
```

### Development Server

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

### Production Build

Create an optimized production build:

```bash
npm run build
npm start
```

---

## 📝 Customizing Content

### Documentation Pages

Edit or create Markdoc (`.md`) files in the `src/app/docs/` directory. The site will auto-update as you edit these files.

**Structure:**
```
src/app/docs/
├── api/                 # API documentation
├── getting-started/     # Installation and setup
├── guides/             # How-to guides
├── development/        # Development documentation
└── reference/          # Reference materials
```

### Homepage

Edit `src/app/page.md` to update the homepage content and hero section copy.

### Hero Section

Modify `src/components/Hero.tsx` to customize:
- Background image
- Hero copy and messaging
- Call-to-action buttons
- Key value propositions

### Branding

Update `src/components/Logo.tsx` to change:
- Logo icon
- Company name
- Tagline

### Navigation

Edit `src/lib/navigation.ts` to add or remove documentation sections and pages.

---

## 🔍 Global Search

This template includes a global search powered by [FlexSearch](https://github.com/nextapps-de/flexsearch). Access it by:
- Clicking the search input
- Using the `⌘K` (Mac) or `Ctrl+K` (Windows/Linux) shortcut

The search automatically indexes your documentation pages. Customize search parameters in `src/markdoc/search.mjs`.

---

## 🎨 Features

### Markdoc Custom Tags

The site supports custom Markdoc tags for rich content:

**Callout:**
```markdown
{% callout type="note" title="Important" %}
Your message here
{% /callout %}
```

**Quick Links:**
```markdown
{% quick-links %}
{% quick-link title="Title" icon="installation" href="/path" description="Description" /%}
{% /quick-links %}
```

### Syntax Highlighting

Code blocks are automatically highlighted using Prism. Specify the language:

````markdown
```typescript
const example: string = "Hello, world!";
```
````

### Dark Mode

Built-in dark mode support with automatic detection and manual toggle.

---

## 🛠️ Tech Stack

- **[Next.js 14+](https://nextjs.org)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org)** - Type-safe development
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS
- **[Markdoc](https://markdoc.io)** - Markdown-based content authoring
- **[FlexSearch](https://github.com/nextapps-de/flexsearch)** - Fast full-text search
- **[Headless UI](https://headlessui.dev)** - Accessible UI components
- **[Prism](https://prismjs.com)** - Syntax highlighting for code blocks

---

## 📦 Project Structure

```
syntax-ts/
├── src/
│   ├── app/
│   │   ├── docs/              # Documentation content (Markdoc)
│   │   ├── layout.tsx         # Root layout with metadata
│   │   ├── page.md            # Homepage
│   │   └── providers.tsx      # Context providers
│   ├── components/
│   │   ├── Hero.tsx           # Custom LTC hero section
│   │   ├── Logo.tsx           # LTC branding
│   │   ├── Navigation.tsx     # Site navigation
│   │   ├── Search.tsx         # Global search
│   │   └── ...                # Other UI components
│   ├── lib/
│   │   ├── navigation.ts      # Navigation configuration
│   │   └── sections.ts        # Section utilities
│   ├── markdoc/
│   │   ├── nodes.js           # Markdoc node renderers
│   │   ├── tags.js            # Custom Markdoc tags
│   │   └── search.mjs         # Search configuration
│   └── styles/
│       ├── tailwind.css       # Tailwind imports
│       └── prism.css          # Prism syntax theme
├── public/                    # Static assets
├── next.config.mjs           # Next.js configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies and scripts
```

---

## 🔧 Configuration Files

- **Next.js:** `next.config.mjs` - App and build settings
- **TypeScript:** `tsconfig.json` - Compiler options
- **Tailwind:** `postcss.config.js` - PostCSS processing
- **Prettier:** `prettier.config.js` - Code formatting
- **ESLint:** `.eslintrc.json` - Linting rules

---

## 📚 Learn More

To learn more about the technologies used in this site:

- **[Tailwind CSS Docs](https://tailwindcss.com/docs)** - Styling utilities and customization
- **[Next.js Docs](https://nextjs.org/docs)** - App Router, routing, and deployment
- **[Headless UI Docs](https://headlessui.dev)** - Accessible component primitives
- **[Markdoc Docs](https://markdoc.io)** - Content authoring and custom tags
- **[FlexSearch Docs](https://github.com/nextapps-de/flexsearch)** - Search configuration

---

## 📄 License

This site template is a commercial product and is licensed under the [Tailwind Plus license](https://tailwindcss.com/plus/license).

The content and branding are © 2025 Lucido Technology Consulting. All rights reserved.

---

## 🏢 About Lucido Technology Consulting

**Lucido Technology Consulting** specializes in designing and building robust data pipelines for educational institutions. We transform complex student information systems into accessible, reliable data streams that power better decision-making.

**Tagline:** *Driving Digital Clarity*

**Website:** [lucidotechnologyconsulting.com](https://www.lucidotechnologyconsulting.com)

---

*Built with ❤️ using Next.js, TypeScript, and Tailwind CSS*
