---
title: API Reference
description: Complete API reference for Aeries Student Information System endpoints, authentication, and data models
---

# {% $frontmatter.title %}

Complete reference documentation for the Aeries API endpoints, authentication methods, and data formats.

{% quick-links %}
  {% quick-link title="Authentication" icon="installation" href="/docs/api/authentication" description="Certificate-based authentication and security setup" /%}
  {% quick-link title="Endpoints" icon="theming" href="/docs/api/endpoints" description="Complete list of available API endpoints" /%}
  {% quick-link title="Students" icon="plugins" href="/docs/api/students" description="Student data endpoints and operations" /%}
  {% quick-link title="Schools" icon="presets" href="/docs/api/schools" description="School information endpoints" /%}
{% /quick-links %}

## Overview

The Aeries API provides secure, certificate-based access to student information system data. All endpoints require proper authentication and return structured JSON data.

{% callout type="info" %}
**Base URL Format**: `https://your-district.aeries.net/admin/api/v5`  
**Authentication**: Client certificate required  
**Content Type**: `application/json`
{% /callout %}

## API Capabilities

Current implementation supports:

### Student Data
- Student enrollment information
- Grade and school assignments
- Contact information
- Academic records

### School Information  
- School directory data
- Administrative contacts
- School codes and identifiers

### Export Functions
- CSV data export
- Excel report generation
- PDF document creation

## API Status

{% callout type="warning" %}
**Development Status**: Phase 2 Complete  
Endpoints are currently being implemented. Check the [migration progress](/docs#migration-progress) for current status.
{% /callout %}

| Feature | Status | Notes |
|---------|--------|-------|
| Authentication | 🚧 In Progress | Phase 4: API client implementation |
| Student Endpoints | 📋 Planned | Phase 5: HTTP server endpoints |
| School Endpoints | 📋 Planned | Phase 5: HTTP server endpoints |
| CSV Export | 📋 Planned | Phase 6: CSV export implementation |
| Excel Export | 📋 Planned | Phase 7: Excel export implementation |
| PDF Export | 📋 Planned | Phase 8: PDF export implementation |

## Error Handling

All API endpoints use structured error responses with appropriate HTTP status codes:

```json
{
  "error": "Resource not found"
}
```

Common HTTP status codes:
- **200 OK**: Successful request
- **400 Bad Request**: Invalid request parameters
- **401 Unauthorized**: Authentication failed
- **404 Not Found**: Resource not found
- **500 Internal Server Error**: Server error
- **502 Bad Gateway**: Aeries API error

See the [Error Reference](/docs/reference/errors) for complete error documentation.

## Rate Limiting

{% callout type="note" %}
Rate limiting policies are determined by your Aeries server configuration. Contact your district administrator for specific limits.
{% /callout %}

## Examples

Quick API usage examples:

```rust
use aeries_api::{Client, Student};

// Initialize client with certificates
let client = Client::new()
    .with_certificate_path("/path/to/cert.pem")
    .with_private_key_path("/path/to/key.pem")
    .build()?;

// Fetch student data
let student = client.get_student(12345).await?;
println!("Student: {}", student.name);
```

For complete code examples, see the [Examples section](/docs/api/examples).

## Next Steps

- [Set up authentication](/docs/api/authentication) with your certificates
- [Explore student endpoints](/docs/api/students) for data access
- [Review error handling](/docs/reference/errors) for robust applications