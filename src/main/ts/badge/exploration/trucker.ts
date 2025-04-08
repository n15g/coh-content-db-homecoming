import { BadgeData, zoneLink } from 'coh-content-db'
import { PocketD } from '../../zone/pocket-d'

export const Trucker: BadgeData = {
  type: 'exploration',
  key: 'trucker',
  setTitleId: [731],
  name: 'Trucker',
  morality: 'all',
  badgeText: `You've visited the floating truck in Pocket D.`,
  notes: `On the truck floating outside of ${zoneLink(PocketD)}.

From the Chalet island, a character will need to fly, teleport, or super jump to reach the truck.`,
  links: [
    { title: 'Trucker Badge', href: 'https://homecoming.wiki/wiki/Trucker_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: PocketD.key, coords: [200, -3, -1101] }, vidiotMapKey: '1' },
  ],
}
