import { BadgeData } from 'coh-content-db'

export const BugFixer: BadgeData = {
  type: 'AE',
  key: 'bug-fixer',
  setTitle: { id: 1203 },
  name: [
    { value: 'Bug Fixer' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: 'You\'ve tested one of your own missions assuring that it works as intended.' }],
  acquisition: 'Create a mission in the Mission Architect, and complete it in Test Mode.',
  links: [
    { title: 'Bug Fixer Badge', href: 'https://homecoming.wiki/wiki/Bug-Fixer_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ae/bug-fixer.png' }],
}
