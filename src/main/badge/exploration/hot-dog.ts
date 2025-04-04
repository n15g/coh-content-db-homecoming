import { BadgeData } from 'coh-content-db'
import { SirensCall } from '../../zone/sirens-call'

export const HotDog: BadgeData = {
  type: 'exploration',
  key: 'hot-dog',
  setTitleId: [2416],
  name: 'Hot Dog',
  morality: 'all',
  badgeText: `Although Nick has since set up shop at a new location on Talos Island, many former residents of Siren's Call still miss the atmosphere of the old stand.`,
  zoneKey: SirensCall.key,
  loc: [149, 0, 1473],
  links: [
    { title: 'New PvP Exploration Badge List', href: 'https://forums.homecomingservers.com/topic/11053-new-pvp-exploration-badge-list/' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  vidiotMapKey: '6',
}
