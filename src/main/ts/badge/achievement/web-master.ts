import { BadgeData } from 'coh-content-db'

export const WebMaster: BadgeData = {
  type: 'achievement',
  key: 'web-master',
  setTitleId: [351],
  name: 'Web Master',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: 'You are a well-known threat in the chaotic district of Warburg, having spent well over one hour fighting Arachnos.' },
    { alignment: 'villain', value: 'You are a well-known threat in the chaotic district of Warburg, having spent well over one hour fighting Longbow.' },
  ],
  acquisition: 'Spend 1 hour in Warburg.',
  links: [
    { title: 'Web Master Badge', href: 'https://homecoming.wiki/wiki/Web_Master_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/time-h.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/time-v.png' },
  ],
}
