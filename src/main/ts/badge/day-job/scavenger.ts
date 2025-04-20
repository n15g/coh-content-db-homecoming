import { BadgeData } from 'coh-content-db'

export const Scavenger: BadgeData = {
  type: 'day-job',
  key: 'scavenger',
  setTitleId: [2044],
  name: 'Scavenger',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `Your time spent scrounging in the wrecked city of First Ward has earned you the Scavenger Day Job.
Logging out in First Ward will enable you to dig up extra Inspirations on mission complete for a short time after you log back in.`,
  acquisition: 'Log out anywhere in First Ward for 100 hours.',
  links: [
    { title: 'Scavenger Badge', href: 'https://homecoming.wiki/wiki/Scavenger_Badge' },
    { title: 'Day Jobs', href: 'https://homecoming.wiki/wiki/Day_Jobs' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/day-job/scavenger.png',
}
