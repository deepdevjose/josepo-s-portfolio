# Test Plan: deepdevjose-portfolio

## Smoke Tests

- Run `ghost analyze .` and confirm `.ghost/architecture.json` is written.
- Run `ghost explain` and confirm it summarizes the repository.
- Run `ghost explain <file>` and confirm it reports imports, exports, and declarations.

## Package Tests

- deepdevjose-portfolio: add a package-level smoke test or document why repository-level coverage is enough.

## Risk-Driven Coverage

- No test files found: Add focused smoke tests around the CLI commands and analyzer output before expanding AI workflows.
- README is too thin for onboarding: Document the MVP command workflow and make clear which AI features are planned.
- No CI workflow detected: Add CI once the MVP command behavior has tests, so releases stay reproducible.
- No license file detected: Add a license before publishing packages or distributing an installer.