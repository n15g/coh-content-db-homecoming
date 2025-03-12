import { BadgeData } from 'coh-content-db'

export const ResistanceIsFutile: BadgeData = {
  type: 'DEFEAT',
  key: 'resistance-is-futile',
  setTitle: { id: 1471 },
  name: [
    { value: 'Resistance is Futile' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'The Resistance considers you an obstacle to accomplishing their goal of overthrowing Emperor '
        + 'Cole. You defeated a number of Resistance members to earn this badge.',
    },
  ],
  acquisition: 'Defeat 100 points worth of The Resistance',
  links: [
    { title: 'Resistance is Futile Badge', href: 'https://homecoming.wiki/wiki/Resistance_Is_Futile_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/resistance-is-futile.png' },
  ],
}
