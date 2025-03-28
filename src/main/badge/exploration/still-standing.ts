import { BadgeData } from 'coh-content-db'
import { SirensCall } from '../../zone/sirens-call'

export const StillStanding: BadgeData = {
  type: 'EXPLORATION',
  key: 'still-standing',
  setTitle: { id: 2417 },
  name: [{ value: 'Still Standing' }],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: `This building was shaken to its foundations, but it is still standing... and so are you.` }],
  zoneKey: SirensCall.key,
  loc: [105, 190.8, -324],
  links: [
    { title: 'New PvP Exploration Badge List', href: 'https://forums.homecomingservers.com/topic/11053-new-pvp-exploration-badge-list/' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  vidiotMapKey: '7',
}
