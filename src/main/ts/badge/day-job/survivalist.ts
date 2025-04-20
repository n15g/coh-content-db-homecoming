import { BadgeData } from 'coh-content-db'

export const Survivalist: BadgeData = {
  type: 'day-job',
  key: 'survivalist',
  setTitleId: [2043],
  name: 'Survivalist',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `Your time spent learning from the hearty Survivors of First Ward has earned you the Survivalist Day Job.
Logging out in the Survivor Compound will earn you a bonus chance to earn recipes on mission complete for a short time when you log back in.`,
  acquisition: 'Log out at the Survivor Compound in First Ward for 100 hours.',
  links: [
    { title: 'Survivalist Badge', href: 'https://homecoming.wiki/wiki/Survivalist_Badge' },
    { title: 'Day Jobs', href: 'https://homecoming.wiki/wiki/Day_Jobs' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/day-job/survivalist.png',
}
