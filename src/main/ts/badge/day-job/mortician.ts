import { BadgeData } from 'coh-content-db'

export const Mortician: BadgeData = {
  type: 'day-job',
  key: 'mortician',
  setTitleId: [1049],
  name: 'Mortician',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `Your time spent studying death itself has earned you the Mortician Day Job.
Logging out in a graveyard will earn you protection against Experience Debt, when you log back in, for a short time.`,
  acquisition: 'Log out a Graveyard for 100 hours.',
  links: [
    { title: 'Mortician Badge', href: 'https://homecoming.wiki/wiki/Mortician_Badge' },
    { title: 'Day Jobs', href: 'https://homecoming.wiki/wiki/Day_Jobs' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/day-job/mortician.png',
}
