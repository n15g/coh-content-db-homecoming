import { BadgeData } from 'coh-content-db'

export const VanguardRecruit: BadgeData = {
  type: 'DAY_JOB',
  key: 'vanguard-recruit',
  setTitle: { id: 1040 },
  name: [
    { value: 'Vanguard Recruit' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [{
    value: 'You have worked closely with Vanguard helping to eliminate the Rikti threat earning you the Vanguard Recruit Day Job.'
      + ' Logging out in the Vanguard Base will earn you a bonus to the number of Vanguard Merits you receive, when you log back in, each time you complete a mission for a short time.',
  }],
  acquisition: 'Log out inside a Vanguard base for 100 hours.',
  effect: 'Day Job: Bonus Vanguard Merits upon mission completion',
  notes: 'You must be level 35 before this badge will unlock, however you can earn credit toward this badge before then.',
  links: [
    { title: 'Vanguard Recruit Badge', href: 'https://homecoming.wiki/wiki/Vanguard_Recruit_Badge' },
    { title: 'Day Jobs', href: 'https://homecoming.wiki/wiki/Day_Jobs' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/day-job/vanguard-recruit.png' }],
}
