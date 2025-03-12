import { BadgeData } from 'coh-content-db'

export const KnowsNoFear: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'knows-no-fear',
  setTitle: { id: 2201 },
  name: [
    { value: 'Knows No Fear' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'You chose to fight against Romulus and his army of Talons by yourself, showing that you know '
        + 'no fear.',
    },
  ],
  acquisition: 'Refuse help from the Cimerorans in the final mission from Sister Solaris',
  links: [
    { title: 'Knows No Fear Badge', href: 'https://homecoming.wiki/wiki/Knows_No_Fear_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/da-zone.png' },
  ],
}
