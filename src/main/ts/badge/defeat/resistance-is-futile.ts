import { BadgeData } from 'coh-content-db'

export const ResistanceIsFutile: BadgeData = {
  type: 'defeat',
  key: 'resistance-is-futile',
  setTitleId: [1471],
  name: 'Resistance is Futile',
  morality: 'all',
  badgeText: `The Resistance considers you an obstacle to accomplishing their goal of overthrowing Emperor Cole. You defeated a number of Resistance members to earn this badge.`,
  acquisition: 'Defeat 100 points worth of The Resistance.',
  notes: `Each minion counts as 1 point, lieutenants as 2 points, and bosses as 5 points.`,
  links: [
    { title: 'Resistance is Futile Badge', href: 'https://homecoming.wiki/wiki/Resistance_Is_Futile_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/resistance-is-futile.png',
}
