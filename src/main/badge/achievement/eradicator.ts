import { BadgeData } from 'coh-content-db'

export const Eradicator: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'eradicator',
  setTitle: { id: 2359 },
  name: [
    { value: 'Eradicator' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: `You have inflicted fifty million points of damage upon your foes.` }],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/deal-damage-h.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/deal-damage-v.png' },
  ],
  acquisition: 'Deal 50,000,000 damage to earn this badge',
  links: [
    { title: 'Eradicator Badge', href: 'https://homecoming.wiki/wiki/Eradicator_Badge' },
  ],
}
