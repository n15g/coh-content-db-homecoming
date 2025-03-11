import { BadgeData } from 'coh-content-db'

export const WebMaster: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'web-master',
  setTitle: { id: 351 },
  name: [
    { value: 'Web Master' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      alignment: 'H', value: 'You are a well-known threat in the chaotic district of Warburg, having spent well over one hour '
        + 'fighting Arachnos.',
    },
    {
      alignment: 'V', value: 'You are a well-known threat in the chaotic district of Warburg, having spent well over one hour '
        + 'fighting Longbow.',
    },
  ],
  acquisition: 'Spend 1 hour in Warburg',
  links: [
    { title: 'Web Master Badge', href: 'https://homecoming.wiki/wiki/Web_Master_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/time-h.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/time-v.png' },
  ],
}
