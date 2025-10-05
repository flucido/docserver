# Lucido Technology Consulting - Data Solutions Documentation

![LTC Banner](https://img.shields.io/badge/Lucido_Technology_Consulting-Data_Solutions-blue?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-14+-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-3178C6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3+-38B2AC?style=flat-square&logo=tailwind-css)

> **Empowering educational institutions with enterprise-grade data pipelines and seamless data access solutions.**

This repository contains the comprehensive documentation site for Lucido Technology Consulting's data engineering services, specializing in building robust data pipelines and API integrations for educational institutions.

---

## 🎯 Overview

Lucido Technology Consulting helps educational institutions transform complex student information systems (SIS) into accessible, reliable data streams that power better decision-making. Our documentation site showcases our expertise in:

- **Data Pipeline Architecture** - End-to-end ETL/ELT solutions
- **Secure API Development** - RESTful APIs with enterprise-grade authentication
- **Real-Time Data Access** - Stream processing and event-driven architectures
- **Data Integration** - Connecting SIS, LMS, CRM, and fundraising platforms
- **Type-Safe Implementations** - Production-ready solutions built with Rust and modern languages
- **Scalable Infrastructure** - Cloud-native designs that grow with your institution

---

## 🏗️ Project Structure

```
docserver/
├── .codacy/                    # Codacy code quality configuration
├── .github/
│   └── instructions/           # AI agent instructions for Codacy integration
├── tailwind-plus-syntax/
│   └── syntax-ts/             # Main Next.js documentation site
│       ├── src/
│       │   ├── app/           # Next.js App Router pages
│       │   │   ├── docs/      # Documentation content (Markdoc)
│       │   │   ├── layout.tsx # Root layout with LTC metadata
│       │   │   └── page.md    # Homepage with hero section
│       │   ├── components/    # React components
│       │   │   ├── Hero.tsx   # Custom LTC hero with background image
│       │   │   ├── Logo.tsx   # LTC branding (logo + tagline)
│       │   │   └── ...        # Navigation, search, UI components
│       │   ├── lib/           # Utility functions and navigation config
│       │   ├── markdoc/       # Markdoc configuration and tags
│       │   └── styles/        # Global styles and Prism themes
│       ├── public/            # Static assets
│       └── package.json       # Dependencies and scripts
├── AGENTS.md                  # Build/lint/test commands and code style
└── README.md                  # This file
```

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18.x or higher
- **npm** 9.x or higher

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/flucido/docserver.git
   cd docserver/tailwind-plus-syntax/syntax-ts
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the site.

---

## 📚 Documentation Structure

The documentation is organized into the following sections:

### Getting Started
- **Installation** - Setup and configuration guide
- **Quick Start** - Get up and running quickly
- **Configuration** - Environment and system configuration

### API Reference
- **Authentication** - Security and API key management
- **Endpoints** - Complete API endpoint documentation
- **Schools** - School-related data endpoints
- **Students** - Student data access and management
- **Examples** - Real-world integration examples

### Guides
- **Testing** - Testing strategies and best practices
- **Error Handling** - Robust error management patterns
- **Deployment** - Production deployment guides
- **Migration** - Legacy system migration strategies

### Development
- **Architecture** - System design and patterns
- **Phases** - Development phase documentation
- **Research** - Technical research and analysis

### Reference
- **Models** - Data models and schemas
- **Errors** - Error codes and troubleshooting
- **Glossary** - Terms and definitions

---

## 🎨 Features

### Modern Tech Stack
- **Next.js 14+** with App Router for optimal performance
- **TypeScript** for type safety and better developer experience
- **Tailwind CSS** for responsive, utility-first styling
- **Markdoc** for rich, component-based documentation

### LTC Branding
- **Custom Hero Section** with full-width background image
- **Professional Logo** with hand/lightbulb icon and company tagline
- **Consistent Brand Colors** using cyan/blue gradients
- **Educational Imagery** reflecting our target audience

### Documentation Features
- **Global Search** powered by FlexSearch (⌘K shortcut)
- **Table of Contents** for easy navigation
- **Syntax Highlighting** with Prism for code examples
- **Dark Mode Support** for comfortable reading
- **Mobile Responsive** design for all devices
- **Quick Links** for common tasks
- **Callouts** for important information

### Code Quality
- **ESLint** with Next.js configuration
- **Prettier** for consistent code formatting
- **Codacy CLI** integration for automated code analysis
- **Type Safety** throughout the codebase

---

## 🛠️ Development

### Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run linter
npm run lint

# Format code
npx prettier --write .
```

### Project Configuration

- **Next.js Config:** `next.config.mjs` - App and build configuration
- **TypeScript Config:** `tsconfig.json` - TypeScript compiler options
- **Tailwind Config:** `postcss.config.js` + inline config
- **Prettier Config:** `prettier.config.js` - Code formatting rules
- **ESLint Config:** `.eslintrc.json` - Linting rules

### Content Management

All documentation content is written in Markdoc (`.md` files) and stored in `src/app/docs/`. The Markdoc configuration supports custom tags:

- `{% callout %}` - Highlighted information boxes
- `{% quick-links %}` - Grid of quick navigation links
- `{% quick-link %}` - Individual quick link card
- `{% figure %}` - Image with caption

---

## 🎯 Customization

### Updating Branding

**Logo:** Edit `src/components/Logo.tsx`
**Hero Section:** Modify `src/components/Hero.tsx`
**Color Scheme:** Update Tailwind classes in components
**Metadata:** Change SEO info in `src/app/layout.tsx`

### Adding Documentation

1. Create a new `.md` file in `src/app/docs/[category]/`
2. Add frontmatter with title and metadata
3. Write content using Markdoc syntax
4. Update navigation in `src/lib/navigation.ts`

### Customizing Search

The global search automatically indexes all documentation. To customize:
- Edit search parameters in `src/markdoc/search.mjs`
- Adjust which fields are indexed
- Configure result ranking

---

## 🏢 About Lucido Technology Consulting

**Lucido Technology Consulting** specializes in AI-powered solutions and data engineering services for educational institutions. Founded by Frank Lucido, we combine deep educational sector expertise with cutting-edge technology to deliver measurable results.

### Our Mission
> "Education is the foundation upon which we build a better world. It is the great equalizer, providing opportunities for people from all walks of life to achieve their dreams and make a difference."

### Core Services
- AI Readiness Assessment & Strategic Roadmap
- Data Pipeline Design & Implementation
- API Development & Integration
- Operational & Fundraising Transformation
- Custom Software Development

### Contact
- **Website:** [https://www.lucidotechnologyconsulting.com](https://www.lucidotechnologyconsulting.com)
- **Email:** Contact through website
- **Tagline:** *Driving Digital Clarity*

---

## 📄 License

This documentation site is built using the [Tailwind Plus](https://tailwindcss.com/plus) Syntax template, which is a commercial product licensed under the [Tailwind Plus license](https://tailwindcss.com/plus/license).

The documentation content and LTC branding are © 2025 Lucido Technology Consulting. All rights reserved.

---

## 🤝 Contributing

This is a private documentation repository for Lucido Technology Consulting. If you're a team member:

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make your changes and commit: `git commit -m "feat: your feature"`
3. Push to the branch: `git push origin feature/your-feature`
4. Open a Pull Request

### Commit Convention
We follow [Conventional Commits](https://www.conventionalcommits.org/):
- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

---

## 🔗 Technology Stack

- **[Next.js](https://nextjs.org)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS framework
- **[Markdoc](https://markdoc.io)** - Markdown-based content authoring
- **[FlexSearch](https://github.com/nextapps-de/flexsearch)** - Full-text search
- **[Headless UI](https://headlessui.dev)** - Unstyled UI components
- **[Prism](https://prismjs.com)** - Syntax highlighting
- **[Codacy](https://www.codacy.com)** - Code quality analysis

---

## 📞 Support

For questions about the documentation site or LTC's data solutions:

1. **Technical Issues:** Open an issue in this repository
2. **Business Inquiries:** Visit [lucidotechnologyconsulting.com](https://www.lucidotechnologyconsulting.com)
3. **Documentation Feedback:** Submit a PR with suggested improvements

---

**Built with ❤️ by Lucido Technology Consulting**

*Transforming Education with Data Solutions*
