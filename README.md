# coh-content-db-homecoming

[![CI](https://img.shields.io/github/actions/workflow/status/n15g/coh-content-db-homecoming/ci.yml?branch=master&label=CI)](https://github.com/n15g/coh-content-db-homecoming/actions/workflows/ci.yml)
[![Codecov](https://img.shields.io/codecov/c/github/n15g/coh-content-db-homecoming)](https://app.codecov.io/gh/n15g/coh-content-db-homecoming)
[![GitHub Tag](https://img.shields.io/github/v/tag/n15g/coh-content-db-homecoming)](https://github.com/n15g/coh-content-db-homecoming/tags)
[![NPM Version](https://img.shields.io/npm/v/coh-content-db-homecoming)](https://www.npmjs.com/package/coh-content-db-homecoming)
[![GitHub License](https://img.shields.io/github/license/n15g/coh-content-db-homecoming)](LICENSE)

Homecoming server data for use with [coh-content-db](https://github.com/n15g/coh-content-db).

----

# Changelog

[CHANGELOG.md](CHANGELOG.md)

----

# Installation and Usage

```
npm install coh-content-db-homecoming
```

Initialize a database with the homecoming data pack:

```typescript
import { CohContentDatabase } from 'coh-content-db'
import { HOMECOMING } from 'coh-content-db-homecoming'

const database = new CohContentDatabase(HOMECOMING)
```

or from the published JSON:

```typescript
import { BundleData, CohContentDatabase } from 'coh-content-db'

const response = await fetch('https://n15g.github.io/coh-content-db-homecoming/bundle.json')
const bundle = await response.json() as BundleData

const database = new CohContentDatabase(bundle)
```

The supported package entry points are:

* `coh-content-db-homecoming` for the typed `HOMECOMING` bundle
* `coh-content-db-homecoming/bundle.json` for the complete JSON bundle
* `coh-content-db-homecoming/bundle.head.json` for the JSON bundle header

Other package paths are internal and are not part of the public API.

----

# Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for development, release, and content contribution instructions.
