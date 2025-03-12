import { BadgeData } from 'coh-content-db'

export const Psychologist: BadgeData = {
  type: 'DAY_JOB',
  key: 'psychologist',
  setTitle: { id: 2042 },
  name: [
    { value: 'Psychologist' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [{
    value: 'You have spent a great deal of time in the Mother of Mercy Hospital, earning you the Psychologist Day Job.'
      + ' Logging out in the Mother of Mercy Hospital will bolster your defenses against psionic attacks, when you log back in, for a short time.',
  }],
  acquisition: 'Log out inside the Mother of Mercy Hospital in First Ward for 100 hours.',
  effect: 'Day Job: +Res (Psi), +Def (Psi)',
  links: [
    { title: 'Psychologist Badge', href: 'https://homecoming.wiki/wiki/Psychologist_Badge' },
    { title: 'Day Jobs', href: 'https://homecoming.wiki/wiki/Day_Jobs' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/day-job/psychologist.png' }],
}
