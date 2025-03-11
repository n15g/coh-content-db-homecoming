import { BadgeData } from 'coh-content-db'

export const Midnighter: BadgeData = {
  type: 'DAY_JOB',
  key: 'midnighter',
  setTitle: { id: 1042 },
  name: [
    { value: 'Midnighter' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [{
    value: 'Your studies at the Midnighter Club has earned you the Midnighter Day Job.'
      + ' Logging out in the Midnighter Club will earn you a random piece of Arcane Salvage, when you log back in, each time you complete a mission, for a short time.',
  }],
  acquisition: 'Log out inside the Midnight Club building for 100 hours.',
  effect: 'Day Job: Bonus Arcane Salvage upon mission completion',
  links: [
    { title: 'Midnighter Badge', href: 'https://homecoming.wiki/wiki/Midnighter_Badge' },
    { title: 'Day Jobs', href: 'https://homecoming.wiki/wiki/Day_Jobs' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/day-job/midnighter.png' }],
}
