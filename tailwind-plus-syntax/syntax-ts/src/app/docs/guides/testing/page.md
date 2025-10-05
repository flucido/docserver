---
title: Testing Guide
description: Comprehensive testing strategies, tools, and workflows for the Aeries API Rust implementation
---

# {% $frontmatter.title %}

This project includes comprehensive testing tools and strategies to ensure code quality and reliability throughout development.

{% quick-links %}
  {% quick-link title="Quick Start" icon="installation" href="#quick-start" description="Get started with testing in under 2 minutes" /%}
  {% quick-link title="Test Script" icon="plugins" href="#test-script" description="Convenient test.sh script for all testing needs" /%}
  {% quick-link title="Workflows" icon="presets" href="#typical-workflows" description="Common testing workflows for different scenarios" /%}
  {% quick-link title="Advanced Features" icon="theming" href="#advanced-features" description="Coverage, watch mode, and CI integration" /%}
{% /quick-links %}

## Quick Start

{% callout type="success" %}
**Current Status**: 38 tests passing (26 unit tests + 12 error handling tests)  
**Test Coverage**: Excellent - all public APIs tested  
**Zero warnings** from clippy linter
{% /callout %}

The fastest way to run tests:

```bash
# Run all tests (default)
./test.sh

# Development workflow (recommended!)
./test.sh watch    # Auto-reload tests on save
```

## Test Script

This project includes a convenient test script (`test.sh`) that provides access to all testing functionality through a single interface.

### Core Commands

```bash
# Test Execution
./test.sh all      # Run all tests (unit + doc + integration) [DEFAULT]
./test.sh unit     # Run unit tests only (fastest for development)  
./test.sh doc      # Run documentation tests only
./test.sh models   # Run model tests only
./test.sh verbose  # Run tests with full output (--nocapture)

# Development Tools
./test.sh quick    # Quick type check (no test execution, very fast)
./test.sh lint     # Run clippy linter (catches common mistakes)
./test.sh fmt      # Check code formatting
./test.sh clean    # Clean build artifacts and run all tests
```

### Advanced Features

```bash
# Auto-reload (requires cargo-watch)
./test.sh watch    # Auto-reload tests on file changes
                   # Great for TDD workflow!

# Coverage Reports (requires cargo-tarpaulin)  
./test.sh coverage # Generate HTML coverage report
                   # Report generated in coverage/index.html

# CI Integration
./test.sh ci       # Run full CI suite (fmt + lint + test + build)
                   # Use this before committing code

# Help
./test.sh help     # Show all available options
```

{% callout type="tip" %}
**Pro Tip**: Use watch mode during development for instant feedback:
```bash
./test.sh watch
```
This automatically runs tests whenever you save a file!
{% /callout %}

## Typical Workflows

### During Development

**Option 1: Manual testing after each change**
```bash
./test.sh quick     # Fast check while coding
./test.sh unit      # Run tests when ready
```

**Option 2: Watch mode (recommended!)**
```bash
./test.sh watch     # Auto-runs tests on file save
```

### Before Committing

```bash
./test.sh ci        # Full CI suite
```

This runs:
1. Code formatting check (`cargo fmt --check`)
2. Linting (`cargo clippy`)
3. All tests (`cargo test`)
4. Build verification (`cargo build`)

### Debugging Test Failures

```bash
./test.sh verbose   # See println! output
./test.sh models    # Test specific module only
```

### Code Quality Checks

```bash
./test.sh fmt       # Check formatting
./test.sh lint      # Run clippy
```

## Test Statistics

Current test coverage by phase:

{% callout type="info" %}
**Phase 2 Complete**: 38 total tests passing

- **Unit Tests**: 26 (all passing ✅)
- **Error Handling Tests**: 12 (all passing ✅) 
- **Doc Tests**: 5 (all passing ✅)
- **Integration Tests**: 1 (all passing ✅)
- **Failures**: 0
- **Test Execution Time**: < 2 seconds
{% /callout %}

### Breakdown by Module

- `models::student` - 10 tests
- `models::school` - 10 tests  
- `models::report` - 8 tests
- `error` module - 12 tests

## Continuous Testing Setup

For the best development experience, use watch mode in a separate terminal:

```bash
# Terminal 1: Watch mode
./test.sh watch

# Terminal 2: Your editor/development work
```

This gives you instant feedback as you write code!

## Installing Optional Tools

```bash
# Watch mode (highly recommended!)
cargo install cargo-watch

# Coverage reports (optional)
cargo install cargo-tarpaulin
```

## Color Output

The test script includes colored output for better readability:

- 🔵 **Blue headers** - Section markers
- ✅ **Green checkmarks** - Success messages  
- ❌ **Red X marks** - Error messages
- ℹ️ **Yellow info** - Informational messages

## Advanced Features

### Watch Mode

Watch mode is the most powerful feature for development:

```bash
./test.sh watch
```

This automatically runs tests whenever you:
- Save a Rust file
- Modify test files  
- Change dependencies

Perfect for Test-Driven Development (TDD) workflows!

### Coverage Reports

Generate detailed HTML coverage reports:

```bash
./test.sh coverage
```

Opens a detailed report showing:
- Line-by-line coverage
- Function coverage
- Branch coverage
- Module-level statistics

Report is saved to `coverage/index.html`.

### CI Integration

The `./test.sh ci` command runs the complete CI pipeline locally:

1. **Format Check**: Ensures code is properly formatted
2. **Lint Check**: Catches common mistakes and style issues  
3. **All Tests**: Runs every test in the project
4. **Build Verification**: Ensures the project compiles cleanly

This is exactly what runs in CI, so you can catch issues before pushing.

## Future Testing Plans

As the project progresses through migration phases, testing will expand:

- **Phase 3**: Configuration validation tests
- **Phase 4**: API client tests (with mocking)
- **Phase 5**: HTTP endpoint integration tests
- **Phase 6-8**: Export functionality tests

The test script will continue to work throughout all phases!

## Best Practices

### Test-Driven Development

1. **Write failing test first**
   ```bash
   ./test.sh watch  # Start watch mode
   # Write test, see it fail
   # Implement code, see it pass
   ```

2. **Use appropriate test granularity**
   ```bash
   ./test.sh models    # Test specific module
   ./test.sh unit      # Quick feedback cycle
   ./test.sh all       # Full verification
   ```

3. **Maintain test quality**
   ```bash
   ./test.sh ci        # Before every commit
   ./test.sh coverage  # Check coverage regularly
   ```

### Performance

- **Use `quick` for fast feedback** while coding
- **Use `unit` for focused testing** of specific functionality
- **Save `all` for final verification** before commits

### Debugging

- **Use `verbose`** to see debug output from tests
- **Use module-specific commands** to isolate failures
- **Check `clippy` output** for code quality suggestions

{% callout type="success" %}
**Success Metric**: The entire test suite runs in under 2 seconds, enabling rapid development cycles.
{% /callout %}