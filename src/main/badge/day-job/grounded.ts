import { BadgeData } from 'coh-content-db'

export const Grounded: BadgeData = {
  type: 'DAY_JOB',
  key: 'grounded',
  setTitle: { id: 1043 },
  name: [
    { alignment: 'H', value: 'Grounded' },
    { alignment: 'V', value: 'Pilot' },
  ],
  alignment: ['V'],
  badgeText: [{
    alignment: 'H',
    value: 'Arachnos is more likely to pound you into dust than let you near one of their fliers. And your license is no good in Paragon City, it seems.',
  }, {
    alignment: 'V',
    value: 'You have aided Arachnos by piloting its fliers, helping Lord Recluse better mobilize his troops, earning you the Pilot Day Job.'
      + ' Logging out near a Black Helicopter will earn you a Speed Bonus, when you log back in, for a short time.',
  }],
  acquisition: 'Log out at the Black Helicopter Line for 100 hours.',
  effect: 'Day Job: +Movement Speed',
  links: [
    { title: 'Grounded Badge', href: 'https://homecoming.wiki/wiki/Grounded_Badge' },
    { title: 'Pilot Badge', href: 'https://homecoming.wiki/wiki/Pilot_Badge' },
    { title: 'Day Jobs', href: 'https://homecoming.wiki/wiki/Day_Jobs' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/day-job/grounded.png' }],
}
