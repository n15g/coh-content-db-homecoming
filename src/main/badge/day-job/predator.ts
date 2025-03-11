import { BadgeData } from 'coh-content-db'

export const Predator: BadgeData = {
  type: 'DAY_JOB',
  key: 'predator',
  setTitle: { id: 1047 },
  name: [
    { value: 'Predator' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [{
    alignment: 'H', value: 'You spend your free time battling villains in PvP Zones earning you the Predator Day Job.'
      + ' Logging out in a PvP zone will earn you a bonus to your Recharge rate, when you log back in, for a short time.',
  }, {
    alignment: 'V', value: 'You spend your free time battling heroes in PvP zones earning you the Predator Day Job.'
      + ' Logging out in a PvP zone will earn you a bonus to your Recharge rate, when you log back in, for a short time.',
  }],
  acquisition: 'Log out inside PvP Zones for 100 hours.',
  effect: 'Day Job: +Recharge',
  links: [
    { title: 'Predator Badge', href: 'https://homecoming.wiki/wiki/Predator_Badge' },
    { title: 'Day Jobs', href: 'https://homecoming.wiki/wiki/Day_Jobs' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/day-job/predator.png' }],
}
