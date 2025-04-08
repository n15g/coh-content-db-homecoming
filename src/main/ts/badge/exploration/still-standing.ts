import { BadgeData } from 'coh-content-db'
import { SirensCall } from '../../zone/sirens-call'

export const StillStanding: BadgeData = {
  type: 'exploration',
  key: 'still-standing',
  setTitleId: [2417],
  name: 'Still Standing',
  morality: 'all',
  badgeText: `This building was shaken to its foundations, but it is still standing... and so are you.`,
  links: [
    { title: 'New PvP Exploration Badge List', href: 'https://forums.homecomingservers.com/topic/11053-new-pvp-exploration-badge-list/' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: SirensCall.key, coords: [105, 190.8, -324] }, vidiotMapKey: '7' },
  ],
}
