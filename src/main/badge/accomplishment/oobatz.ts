import { BadgeData } from 'coh-content-db'

export const Oobatz: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'oobatz',
  setTitle: { id: 2319 },
  name: [
    { value: 'Oobatz' },
  ],
  alignment: ['V'],
  badgeText: [
    {
      value: 'You stopped Longbow from raiding a Family casino in St. Martial, then proceeded to rob the '
        + 'Family blind. The goons of the Family have taken to calling you \'Oobatz\', crazy, for daring to '
        + 'cross them.',
    },
  ],
  acquisition: 'Complete the The Family Raid zone event in St. Martial',
  links: [
    { title: 'Oobatz Badge', href: 'https://homecoming.wiki/wiki/Oobatz_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/st-martial-arc.png' },
  ],
}
