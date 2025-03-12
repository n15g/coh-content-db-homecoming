import { BadgeData } from 'coh-content-db'

export const Cimeroran: BadgeData = {
  type: 'DAY_JOB',
  key: 'cimeroran',
  setTitle: { id: 1046 },
  name: [
    { value: 'Cimeroran' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [{
    alignment: 'H', value: 'Your time spent protecting the inhabitants of Cimerora has earned you the Cimeroran Day Job.'
      + ' Logging out in Cimerora will earn you a bonus to your damage resistance, when you log back in, for a short time.',
  }, {
    alignment: 'V', value: 'Your time spent plotting against the inhabitants of Cimerora has earned you the Cimeroran Day Job.'
      + ' Logging out in Cimerora will earn you a bonus to your damage resistance, when you log back in, for a short time.',
  }],
  acquisition: 'Log out inside Cimerora for 100 hours.',
  effect: 'Day Job: +Res(All)',
  links: [
    { title: 'Cimeroran Badge', href: 'https://homecoming.wiki/wiki/Cimeroran_Badge' },
    { title: 'Day Jobs', href: 'https://homecoming.wiki/wiki/Day_Jobs' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/day-job/cimeroran.png' }],
}
