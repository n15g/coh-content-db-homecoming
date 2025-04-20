import { BadgeData } from 'coh-content-db'

export const Reinforcement: BadgeData = {
  type: 'pvp',
  key: 'reinforcement',
  setTitleId: [364],
  name: 'Reinforcement',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You've taken down 20 villains in PvP.` },
    { alignment: 'villain', value: `You've taken down 20 heroes in PvP.` },
  ],
  acquisition: 'Defeat 20 player characters in a PvP zone by your own hand.',
  links: [
    { title: 'Reinforcement Badge', href: 'https://homecoming.wiki/wiki/Reinforcement_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/pvp-defeats.png',
}
