import { BadgeData } from 'coh-content-db'

export const CannonFodder: BadgeData = {
  type: 'DAY_JOB',
  key: 'cannon-fodder',
  setTitle: { id: 1052 },
  name: [
    { alignment: 'H', value: 'Cannon Fodder' },
    { alignment: 'V', value: 'Arachnos Agent' },
  ],
  alignment: ['V'],
  badgeText: [{
    alignment: 'H',
    value: 'There\'s no resigning from Arachnos, but you appear to have done just that. Good luck.',
  }, {
    alignment: 'V',
    value: 'Your work with the forces of Arachnos has earned you the Arachnos Agent Day Job.'
      + ' Logging out in an Arachnos Base will grant you an Experience bonus, when you log back in, each time you complete a mission for a short time.',
  }],
  acquisition: 'Log out at Arachnos Bases with no hostile critters for 100 hours.',
  effect: 'Day Job: Bonus XP upon mission completion',
  links: [
    { title: 'Cannon Fodder Badge', href: 'https://homecoming.wiki/wiki/Cannon_Fodder_Badge' },
    { title: 'Arachnos Agent Badge', href: 'https://homecoming.wiki/wiki/Arachnos_Agent_Badge' },
    { title: 'Day Jobs', href: 'https://homecoming.wiki/wiki/Day_Jobs' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/day-job/cannon-fodder.png' }],
}
