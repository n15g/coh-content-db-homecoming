import { BadgeData } from 'coh-content-db'
import { BloodyBay } from '../../zone/bloody-bay'

export const Burgermeister: BadgeData = {
  type: 'exploration',
  key: 'burgermeister',
  setTitleId: [2412],
  name: [
    { sex: 'M', value: 'Burgermeister' },
    { sex: 'F', value: 'Burgermeisterin' },
  ],
  releaseDate: '2019-06-01',
  morality: 'all',
  badgeText: `Hero Burgers was once the best fast-food restaurant in Oceanview, before the island was evacuated and abandoned.`,
  links: [
    { title: 'New PvP Exploration Badge List', href: 'https://forums.homecomingservers.com/topic/11053-new-pvp-exploration-badge-list/' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: BloodyBay.key, coords: [1948, -15, 1806], icon: 'badge', iconText: '6' } },
  ],
}
