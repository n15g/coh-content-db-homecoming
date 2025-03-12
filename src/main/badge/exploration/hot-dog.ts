import { BadgeData } from 'coh-content-db'
import { SirensCall } from '../../map/sirens-call'

export const HotDog: BadgeData = {
  type: 'EXPLORATION',
  key: 'hot-dog',
  setTitle: { id: 2416 },
  name: [{ value: 'Hot Dog' }],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: `Although Nick has since set up shop at a new location on Talos Island, many former residents of Siren's Call still miss the atmosphere of the old stand.` }],
  mapKey: SirensCall.key,
  loc: [149, 0, 1473],
  links: [
    { title: 'New PvP Exploration Badge List', href: 'https://forums.homecomingservers.com/topic/11053-new-pvp-exploration-badge-list/' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  vidiotMapKey: '6',
}
