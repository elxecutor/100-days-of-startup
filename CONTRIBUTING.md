# Contributing to 100 Days of Startup

Thank you for your interest in contributing. This document outlines how to get involved.

## Ways to Contribute

There are several ways to contribute to this project:

- **Fix typos or improve clarity** in existing day deliverables
- **Suggest new day topics** via issues
- **Improve the SaaS application** in `day046/` (bug fixes, features, tests)
- **Add book summaries** to the `books/` directory
- **Share your own startup lessons** as additional content

## Getting Started

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-change`
3. Make your changes
4. Commit with a clear message
5. Push to your fork
6. Open a pull request

## Pull Request Guidelines

- Keep changes focused and self-contained
- Reference any related issues in your PR description
- For `day046/` code changes, ensure the application still builds and runs
- For new day deliverables, follow the existing markdown format

## Content Conventions

### Day Deliverables

Each day directory (`dayNNN/`) should contain:

- Markdown files describing the day's work
- Clear headings and structure
- Actionable content (not just theory)

### Book Summaries

Book summaries in `books/` should follow this format:

```markdown
# Book Title

## Key Takeaways
- Point one
- Point two

## Notable Quotes
> "A memorable quote from the book"

## How This Applies to Startups
Brief paragraph connecting the book's lessons to startup building.
```

## Code Standards

For contributions to the SaaS application in `day046/`:

- **Backend (Python)**: Follow PEP 8, use type hints, include docstrings for public functions
- **Frontend (TypeScript)**: Follow the existing ESLint config, use functional components
- **Tests**: Add tests for new backend endpoints and React components

## Commit Messages

Use clear, descriptive commit messages:

- `fix: correct pricing calculation in simulation page`
- `content: add day 101 market expansion strategy`
- `docs: improve setup instructions in day046 README`

## Questions?

Open an issue if you have questions about contributing. We are happy to help you get started.
