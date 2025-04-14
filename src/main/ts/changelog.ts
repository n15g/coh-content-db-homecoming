import { Change } from 'coh-content-db'

export const CHANGELOG: Change[] = [
  {
    version: '2.0.0',
    date: new Date('2025-03-12'),
    description: ''
      + '* Updated to [coh-content-db:2.0.0](https://github.com/n15g/coh-content-db).\n'
      + '* Added Mission and Contact data.\n'
      + '* Bundle data now available as JSON export.\n'
      + '* Change from GNU to The Unlicense.\n'
      + '* Moved from webpack to rollup for packaging.\n'
      + '* Add eslint for linting.\n'
      + '* Add jest for unit tests.\n'
      + '* Added GitHub Actions for CI.\n',
  },
]
