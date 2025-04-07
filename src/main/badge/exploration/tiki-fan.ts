import { BadgeData, zoneLink } from 'coh-content-db'
import { MercyIsland } from '../../zone/mercy-island'

export const TikiFan: BadgeData = {
  type: 'exploration',
  key: 'tiki-fan',
  setTitleId: [1485],
  name: 'Tiki Fan',
  morality: 'villainous',
  zoneKey: MercyIsland.key,
  loc: [-1836, 239, 438],
  badgeText: `Larry's Tiki Lounge is known for its gambling, drinks, fun, and Tikis. And also for the occasional invasion by giant snake monsters.`,
  notes: `
Located on ${zoneLink(MercyIsland)}, in the Mercy neighborhood.

It is directly in front of Larry's Tiki Lounge 133 yards SE of the neighborhood marker.`,
  links: [
    { title: 'Tiki Fan Badge', href: 'https://homecoming.wiki/wiki/Tiki_Fan_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png',
  vidiotMapKey: '8',
}
