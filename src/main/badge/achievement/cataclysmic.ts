import { BadgeData } from 'coh-content-db'

export const Cataclysmic: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'cataclysmic',
  setTitle: { id: 2360 },
  name: [
    { value: 'Cataclysmic' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: `You have inflicted one hundred million points of damage upon your foes.` }],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/deal-damage-h.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/deal-damage-v.png' },
  ],
  acquisition: 'Deal 100,000,000 damage to earn this badge',
  links: [
    { title: 'Cataclysmic Badge', href: 'https://homecoming.wiki/wiki/Cataclysmic_Badge' },
  ],
}
