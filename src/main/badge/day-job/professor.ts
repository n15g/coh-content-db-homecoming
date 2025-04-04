import { BadgeData } from 'coh-content-db'

export const Professor: BadgeData = {
  type: 'day-job',
  key: 'professor',
  setTitleId: [1035],
  name: 'Professor',
  morality: 'all',
  badgeText: [
    {
      alignment: 'hero', value: `Your studies at the Universities of Paragon City during your free time has earned you the Professor Day Job.
Logging out in a University will earn you a random piece of Tech Salvage, when you log back in, each time you complete a mission for a short time.`,
    },
    {
      alignment: 'villain', value: `Your studies at the universites of the Rogue Isles during your free time has earned you the Professor Day Job.
Logging out in a University will earn you a random piece of Tech Salvage, when you log back in, each time you complete a mission for a short time.`,
    },
  ],
  acquisition: 'Log out inside University buildings for 100 hours.',
  links: [
    { title: 'Professor Badge', href: 'https://homecoming.wiki/wiki/Professor_Badge' },
    { title: 'Day Jobs', href: 'https://homecoming.wiki/wiki/Day_Jobs' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/day-job/professor.png',
}
