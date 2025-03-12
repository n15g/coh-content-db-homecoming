import { BadgeData } from 'coh-content-db'

export const Duelist: BadgeData = {
  type: 'DAY_JOB',
  key: 'duelist',
  setTitle: { id: 1044 },
  name: [
    { value: 'Duelist' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [{
    value: 'You spend your free time battling other heroes and villains in Arena matches earning you the Duelist Day Job.'
      + ' Logging out in an Arena will earn you a bonus to your maximum Endurance, when you log back in, for a short time.',
  }],
  acquisition: 'Log out inside Arena buildings for 100 hours.',
  effect: 'Day Job: +Max Endurance',
  links: [
    { title: 'Duelist Badge', href: 'https://homecoming.wiki/wiki/Duelist_Badge' },
    { title: 'Day Jobs', href: 'https://homecoming.wiki/wiki/Day_Jobs' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/day-job/duelist.png' }],
}
