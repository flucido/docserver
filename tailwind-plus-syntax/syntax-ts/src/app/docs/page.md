---
title: Aeries API Documentation
description: Complete documentation for the Aeries Student Information System API - Rust implementation
---

# {% $frontmatter.title %}

Welcome to the Aeries API documentation. This is a Rust implementation of the Aeries Student Information System API backend, migrated from Python using a phased approach that maintains proven architecture while leveraging Rust's type safety and performance.

{% quick-links %}
  {% quick-link title="Getting Started" icon="installation" href="/docs/getting-started" description="Installation, configuration, and quick start guide" /%}
  {% quick-link title="API Reference" icon="theming" href="/docs/api" description="Complete API endpoints and authentication guide" /%}
  {% quick-link title="User Guides" icon="plugins" href="/docs/guides" description="Step-by-step guides for common tasks" /%}
  {% quick-link title="Reference" icon="presets" href="/docs/reference" description="Data models, error codes, and technical reference" /%}
{% /quick-links %}

## Overview

{% callout type="info" %}
**Status**: 🚧 Phase 2 Complete - Error Handling Foundation  
**Migration Progress**: Python → Rust (Bottom-Up Refactoring)
{% /callout %}

This project follows a phased migration approach from a Python implementation to Rust, focusing on:

- **Type Safety**: Compile-time guarantees with Rust's type system
- **Performance**: Zero-cost abstractions and optimized runtime
- **Reliability**: Memory safety without garbage collection
- **Maintainability**: Clear error handling and structured architecture

## Architecture

```
Client Certificate Auth → Axum HTTP Server → Service Layer → Aeries API Client
                               ↓
                         Export Services (CSV/Excel/PDF)
```

## Tech Stack

- **Web Framework**: Axum 0.7 (async HTTP)
- **Runtime**: Tokio (async executor) 
- **HTTP Client**: Reqwest (certificate-based auth)
- **Serialization**: Serde + serde_json
- **Error Handling**: thiserror + anyhow
- **Configuration**: dotenvy (.env loading)
- **Logging**: tracing + tracing-subscriber

## Migration Progress

- [x] **Phase 0**: Environment setup & project structure
- [x] **Phase 1**: Core data models (Student, School, Report)  
- [x] **Phase 2**: Error handling foundation
- [ ] **Phase 3**: Configuration management
- [ ] **Phase 4**: Aeries API client (certificate auth)
- [ ] **Phase 5**: HTTP server endpoints
- [ ] **Phase 6**: CSV export
- [ ] **Phase 7**: Excel export  
- [ ] **Phase 8**: PDF export
- [ ] **Phase 9**: Legacy code migration
- [ ] **Phase 10**: Production hardening

## What's New

{% callout type="success" %}
**Phase 2 Complete**: Comprehensive error handling system with thiserror integration and automatic HTTP response mapping for Axum.
{% /callout %}

Recent completions:
- ✅ **Error Types**: 7 error variants covering all application scenarios
- ✅ **HTTP Integration**: Automatic conversion to proper HTTP status codes
- ✅ **Type Safety**: Compile-time error checking with structured error handling
- ✅ **Security**: No internal details leaked in error responses

## Quick Navigation

### For New Users
- [Installation Guide](/docs/getting-started/installation)
- [Quick Start Tutorial](/docs/getting-started/quick-start)
- [Configuration Setup](/docs/getting-started/configuration)

### For API Users  
- [Authentication](/docs/api/authentication) - Certificate-based authentication
- [Student Endpoints](/docs/api/students) - Student data API
- [School Endpoints](/docs/api/schools) - School information API

### For Developers
- [Testing Guide](/docs/guides/testing) - Testing strategies and tools
- [Migration Guide](/docs/guides/migration) - Python to Rust migration notes
- [Development Process](/docs/development) - Internal development documentation

## Support

- **Issues**: Report bugs and request features on GitHub
- **Documentation**: This site contains complete API and usage documentation
- **Development**: See the [development section](/docs/development) for internal documentation

---

This documentation is generated from the project's source code and is automatically updated with each release.