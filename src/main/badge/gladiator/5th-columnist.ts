import { BadgeData } from 'coh-content-db'

export const _5thColumnist: BadgeData = {
  type: 'GLADIATOR',
  key: '5th-columnist',
  setTitle: { id: 612 },
  name: [
    { value: '5th Columnist' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'For having both the 1st and 2nd Anniversary badges on one character, or by defeating the '
        + 'Reichsman, you have been granted access to a 5th Column Gladiator!',
    },
  ],
  acquisition: 'Earn the [badge:celebrant] and [badge:reveler] badges, or earn the [badge:column-breaker] Badge. (5th Column)',
  links: [
    { title: '5th Columnist Badge', href: 'https://homecoming.wiki/wiki/5th_Columnist_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
}
