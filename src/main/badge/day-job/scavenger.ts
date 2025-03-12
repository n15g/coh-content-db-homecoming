import { BadgeData } from 'coh-content-db'

export const Scavenger: BadgeData = {
  type: 'DAY_JOB',
  key: 'scavenger',
  setTitle: { id: 2044 },
  name: [
    { value: 'Scavenger' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [{
    value: 'Your time spent scrounging in the wrecked city of First Ward has earned you the Scavenger Day Job.'
      + ' Logging out in First Ward will enable you to dig up extra Inspirations on mission complete for a short time after you log back in.',
  }],
  acquisition: 'Log out anywhere in First Ward for 100 hours.',
  effect: 'Day Job: Bonus Inspirations upon mission completion',
  links: [
    { title: 'Scavenger Badge', href: 'https://homecoming.wiki/wiki/Scavenger_Badge' },
    { title: 'Day Jobs', href: 'https://homecoming.wiki/wiki/Day_Jobs' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/day-job/scavenger.png' }],
}
