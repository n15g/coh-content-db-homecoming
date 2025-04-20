import { BadgeData } from 'coh-content-db'

export const Predator: BadgeData = {
  type: 'day-job',
  key: 'predator',
  setTitleId: [1047],
  name: 'Predator',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: [
    {
      alignment: 'hero', value: `You spend your free time battling villains in PvP Zones earning you the Predator Day Job.
Logging out in a PvP zone will earn you a bonus to your Recharge rate, when you log back in, for a short time.`,
    },
    {
      alignment: 'villain', value: `You spend your free time battling heroes in PvP zones earning you the Predator Day Job.
Logging out in a PvP zone will earn you a bonus to your Recharge rate, when you log back in, for a short time.`,
    },
  ],
  acquisition: 'Log out inside PvP Zones for 100 hours.',
  links: [
    { title: 'Predator Badge', href: 'https://homecoming.wiki/wiki/Predator_Badge' },
    { title: 'Day Jobs', href: 'https://homecoming.wiki/wiki/Day_Jobs' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/day-job/predator.png',
}
