# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

- Updated the development toolchain, including TypeScript 6 and the latest lint rules.
- Modernized continuous integration and release workflows for Node 24, reproducible installs, least-privilege permissions, and built-in GitHub authentication.
- Configured npm publishing to use the `beta` tag for prereleases and `latest` for stable releases.
- Simplified the build and lint toolchain by removing unused development dependencies.

---

## [2.2.2] - 2026-04-28

### Added

- Added the Exuberant 2026 Anniversary Badge ([#196](https://github.com/n15g/coh-content-db-homecoming/pull/196)).
- Added contact details for the anniversary vendor Luna.

---

## [2.2.1] - 2026-04-01

### Fixed

- Fixed a handful of SetTitle IDs and some badge capitalization ([#194](https://github.com/n15g/coh-content-db-homecoming/pull/194)).

---

## [2.2.0] - 2026-03-28

### Added

- Added `gameId` to all badges to support new `/build_save` changes ([#192](https://github.com/n15g/coh-content-db-homecoming/pull/192)).

---

## [2.1.6] - 2026-03-24

### Fixed

- Corrected release-date and typographic content errors.

---

## [2.1.5] - 2026-03-24

### Fixed

- Fixed a contact link in the Epidemiologist badge ([#189](https://github.com/n15g/coh-content-db-homecoming/pull/189)).

---

## [2.1.4] - 2026-02-27

### Fixed

- Fixed badge requirements for Abomination, Behemoth Overlord, and Caliban ([#188](https://github.com/n15g/coh-content-db-homecoming/pull/188)).

---

## [2.1.3] - 2026-02-12

### Changed

- Corrected the Home Sweet Home badge requirement to "Spend 60 seconds in your own Supergroup base" ([#187](https://github.com/n15g/coh-content-db-homecoming/pull/187)).

---

## [2.1.2] - 2026-02-11

### Changed

- Updated the release workflow to use the latest Node.js LTS release for trusted publishing.

---

## [2.1.1] - 2026-02-11

### Changed

- Migrated npm releases to GitHub trusted publishing.

---

## [2.1.0] - 2026-02-11

### Added

- Added badges for visiting supergroup bases and the Labyrinth of Fog ([#186](https://github.com/n15g/coh-content-db-homecoming/pull/186)).

### Changed

- Made the Katie Hannon Task Force "x-Times the Victor" badges persistent ([#186](https://github.com/n15g/coh-content-db-homecoming/pull/186)).
- Improved images for badge-collection meta-badges such as Pathfinder and Adventurer ([#186](https://github.com/n15g/coh-content-db-homecoming/pull/186)).

---

## [2.0.4] - 2026-01-27

### Fixed

- Corrected the Beyond Reasonable Doubt acquisition requirement from "Kill Rider" to "Spare Rider" ([#185](https://github.com/n15g/coh-content-db-homecoming/pull/185)).

---

## [2.0.3] - 2026-01-14

### Fixed

- Corrected the spelling of Mutated Marauder ([#184](https://github.com/n15g/coh-content-db-homecoming/pull/184)).

---

## [2.0.2] - 2026-01-06

### Added

- Added Winter Event 2025 content ([#183](https://github.com/n15g/coh-content-db-homecoming/pull/183)).

---

## [2.0.1] - 2026-01-06

### Fixed

- Fixed the broken Mazebreaker badge icon.

---

## [2.0.0] - 2026-01-06

### Added

- Added Issue 28, Page 2 content ([#177](https://github.com/n15g/coh-content-db-homecoming/pull/177)).
- Added Issue 28, Page 3 content ([#182](https://github.com/n15g/coh-content-db-homecoming/pull/182)).
- Added 2025 Anniversary badges ([#176](https://github.com/n15g/coh-content-db-homecoming/pull/176)).
- Added Mission and Contact data.
- Added zone level ranges, morality, and notes.
- Added bundle last-update time to the header.
- Added badge release dates.
- Added the JSON bundle export.
- Added this changelog, continuous integration, linting, custom data-quality rules, and unit tests.

### Changed

- Updated to the [coh-content-db 2.0.0](https://github.com/n15g/coh-content-db) data model.
- Fixed event badge ordering and the Christie Consolidation monument location ([#180](https://github.com/n15g/coh-content-db-homecoming/pull/180)).
- Improved badge icons ([#179](https://github.com/n15g/coh-content-db-homecoming/pull/179)).
- Corrected the Two Birds, One Stone badge title ([#178](https://github.com/n15g/coh-content-db-homecoming/pull/178)).
- Changed the license to [The Unlicense](https://unlicense.org/).
- Switched the build system from Webpack to Rollup.
