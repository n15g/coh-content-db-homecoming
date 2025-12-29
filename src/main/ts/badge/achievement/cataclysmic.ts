import { BadgeData } from 'coh-content-db'

export const Cataclysmic: BadgeData = {
  type: 'achievement',
  key: 'cataclysmic',
  setTitleId: [2360],
  name: 'Cataclysmic',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `You have inflicted one hundred million points of damage upon your foes.`,
  acquisition: 'Deal 100,000,000 damage.',
  links: [
    { title: 'Cataclysmic Badge', href: 'https://homecoming.wiki/wiki/Cataclysmic_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/deal-damage-h.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/deal-damage-v.png' },
  ],
}
