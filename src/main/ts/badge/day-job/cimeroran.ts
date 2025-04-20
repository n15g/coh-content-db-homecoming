import { BadgeData } from 'coh-content-db'

export const Cimeroran: BadgeData = {
  type: 'day-job',
  key: 'cimeroran',
  setTitleId: [1046],
  name: 'Cimeroran',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: [
    {
      alignment: 'hero', value: `Your time spent protecting the inhabitants of Cimerora has earned you the Cimeroran Day Job.
Logging out in Cimerora will earn you a bonus to your damage resistance, when you log back in, for a short time.`,
    },
    {
      alignment: 'villain', value: `Your time spent plotting against the inhabitants of Cimerora has earned you the Cimeroran Day Job.
Logging out in Cimerora will earn you a bonus to your damage resistance, when you log back in, for a short time.`,
    },
  ],
  acquisition: 'Log out inside Cimerora for 100 hours.',
  links: [
    { title: 'Cimeroran Badge', href: 'https://homecoming.wiki/wiki/Cimeroran_Badge' },
    { title: 'Day Jobs', href: 'https://homecoming.wiki/wiki/Day_Jobs' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/day-job/cimeroran.png',
}
