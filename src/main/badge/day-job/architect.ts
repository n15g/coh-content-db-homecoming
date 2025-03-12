import { BadgeData } from 'coh-content-db'

export const Architect: BadgeData = {
  type: 'DAY_JOB',
  key: 'architect',
  setTitle: { id: 1081 },
  name: [
    { value: 'Architect' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [{
    value: 'Your study of the Mission Architect system has earned you the Architect Day Job.'
      + ' Logging out in the Mission Architect will earn you 2 bonus Mission Architect Tickets, when you log back in, each time you complete a mission for a short time.',
  }],
  acquisition: 'Log out inside Architect Entertainment buildings for 100 hours.',
  effect: 'Day Job: Bonus Mission Architect tickets upon mission completion',
  links: [
    { title: 'Architect Badge', href: 'https://homecoming.wiki/wiki/Architect_Badge' },
    { title: 'Day Jobs', href: 'https://homecoming.wiki/wiki/Day_Jobs' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/day-job/architect.png' }],
}
