import { BadgeData } from 'coh-content-db'

export const Professor: BadgeData = {
  type: 'DAY_JOB',
  key: 'professor',
  setTitle: { id: 1035 },
  name: [
    { value: 'Professor' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [{
    alignment: 'H', value: 'Your studies at the Universities of Paragon City during your free time has earned you the Professor Day Job.'
      + ' Logging out in a University will earn you a random piece of Tech Salvage, when you log back in, each time you complete a mission for a short time.',
  }, {
    alignment: 'V', value: 'Your studies at the universites of the Rogue Isles during your free time has earned you the Professor Day Job.'
      + ' Logging out in a University will earn you a random piece of Tech Salvage, when you log back in, each time you complete a mission for a short time.',
  }],
  acquisition: 'Log out inside University buildings for 100 hours.',
  effect: 'Day Job: Bonus Tech Salvage upon mission completion',
  links: [
    { title: 'Professor Badge', href: 'https://homecoming.wiki/wiki/Professor_Badge' },
    { title: 'Day Jobs', href: 'https://homecoming.wiki/wiki/Day_Jobs' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/day-job/professor.png' }],
}
