import { BadgeData } from 'coh-content-db'

export const Architect: BadgeData = {
  type: 'day-job',
  key: 'architect',
  setTitleId: [1081],
  name: 'Architect',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `Your study of the Mission Architect system has earned you the Architect Day Job.
Logging out in the Mission Architect will earn you 2 bonus Mission Architect Tickets, when you log back in, each time you complete a mission for a short time.`,
  acquisition: 'Log out inside Architect Entertainment buildings for 100 hours.',
  links: [
    { title: 'Architect Badge', href: 'https://homecoming.wiki/wiki/Architect_Badge' },
    { title: 'Day Jobs', href: 'https://homecoming.wiki/wiki/Day_Jobs' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/day-job/architect.png',
}
