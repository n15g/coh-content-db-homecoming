import { BadgeData } from 'coh-content-db'

export const Decimator: BadgeData = {
  type: 'achievement',
  key: 'decimator',
  setTitleId: [2358],
  name: 'Decimator',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `You have inflicted ten million points of damage upon your foes.`,
  acquisition: 'Deal 10,000,000 damage.',
  links: [
    { title: 'Decimator Badge', href: 'https://homecoming.wiki/wiki/Decimator_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/deal-damage-h.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/deal-damage-v.png' },
  ],
}
