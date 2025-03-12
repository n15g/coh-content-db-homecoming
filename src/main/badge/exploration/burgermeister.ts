import { BadgeData } from 'coh-content-db'
import { BloodyBay } from '../../map/bloody-bay'

export const Burgermeister: BadgeData = {
  type: 'EXPLORATION',
  key: 'burgermeister',
  setTitle: { id: 2412 },
  name: [
    { sex: 'M', value: 'Burgermeister' },
    { sex: 'F', value: 'Burgermeisterin' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: `Hero Burgers was once the best fast-food restaurant in Oceanview, before the island was evacuated and abandoned.` }],
  mapKey: BloodyBay.key,
  loc: [1948, -15, 1806],
  links: [
    { title: 'New PvP Exploration Badge List', href: 'https://forums.homecomingservers.com/topic/11053-new-pvp-exploration-badge-list/' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  vidiotMapKey: '6',
}
