import { BadgeData } from 'coh-content-db'

export const DUSTRanger: BadgeData = {
  type: 'DAY_JOB',
  key: 'dust-ranger',
  setTitle: { id: 2041 },
  name: [
    { value: 'D.U.S.T. Ranger' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [{
    value: 'You have trained with the elite D.U.S.T. of First Ward during your free time, earning the D.U.S.T. Ranger Day Job.'
      + ' Logging out in the D.U.S.T Training Facility will hone your skills further, granting you a bonus to your damage, accuracy, and range for a short time.',
  }],
  acquisition: 'Log out at the D.U.S.T. Training Facility in First Ward for 100 hours.',
  effect: 'Day Job: Auto: +Dmg (All), +ToHit, +Range',
  links: [
    { title: 'D.U.S.T. Ranger Badge', href: 'https://homecoming.wiki/wiki/D.U.S.T._Ranger_Badge' },
    { title: 'Day Jobs', href: 'https://homecoming.wiki/wiki/Day_Jobs' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/day-job/dust-ranger.png' }],
}
