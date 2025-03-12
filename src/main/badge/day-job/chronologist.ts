import { BadgeData } from 'coh-content-db'

export const Chronologist: BadgeData = {
  type: 'DAY_JOB',
  key: 'chronologist',
  setTitle: { id: 1041 },
  name: [
    { value: 'Chronologist' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [{
    value: 'You have spent a great deal of time working with the agents of Ouroboros earning you the Chronologist Day Job.'
      + ' Logging out in Ouroboros will earn you a bonus enhancement recipe, when you log back in, each time you complete a mission for a short time.',
  }],
  acquisition: 'Log out inside Ouroboros for 100 hours.',
  effect: 'Day Job: Bonus Recipe upon mission completion',
  links: [
    { title: 'Chronologist Badge', href: 'https://homecoming.wiki/wiki/Chronologist_Badge' },
    { title: 'Day Jobs', href: 'https://homecoming.wiki/wiki/Day_Jobs' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/day-job/chronologist.png' }],
}
