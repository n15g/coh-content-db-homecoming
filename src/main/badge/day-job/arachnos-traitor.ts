import { BadgeData } from 'coh-content-db'

export const ArachnosTraitor: BadgeData = {
  type: 'DAY_JOB',
  key: 'arachnos-traitor',
  setTitle: { id: 1051 },
  name: [
    { alignment: 'H', value: 'Arachnos Traitor' },
    { alignment: 'V', value: 'Arachnos Official' },
  ],
  alignment: ['V'],
  badgeText: [{
    alignment: 'H',
    value: 'The Arbiters of Arachnos have made you a priority target. They do not like to let their secrets slip.',
  }, {
    alignment: 'V',
    value: 'Your time spent working with the Arachnos Arbiters has earned you the Arachnos Official Day Job.'
      + ' Logging out in Grandville will earn you Jetpack power, when you log back in, for a short time.',
  }],
  acquisition: 'Log out within Grandville for 100 hours.',
  effect: 'Day Job: Jetpack',
  links: [
    { title: 'Arachnos Traitor Badge', href: 'https://homecoming.wiki/wiki/Arachnos_Traitor_Badge' },
    { title: 'Arachnos Official Badge', href: 'https://homecoming.wiki/wiki/Arachnos_Official_Badge' },
    { title: 'Day Jobs', href: 'https://homecoming.wiki/wiki/Day_Jobs' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/day-job/arachnos-traitor.png' }],
}
