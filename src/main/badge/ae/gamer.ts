import { BadgeData } from 'coh-content-db'

export const Gamer: BadgeData = {
  type: 'AE',
  key: 'gamer',
  setTitle: { id: 1106 },
  name: [
    { value: 'Gamer' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: 'You\'ve experienced your first player created story arc in the Mission Architect.' }],
  acquisition: 'Play one Mission Architect story arc.',
  links: [
    { title: 'Gamer Badge', href: 'https://homecoming.wiki/wiki/Gamer_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ae/gamer.png' }],
}
