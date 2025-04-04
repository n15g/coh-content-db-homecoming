import { BadgeData, zoneLink } from 'coh-content-db'
import { TalosIsland } from '../../zone/talos-island'

export const Whitecap: BadgeData = {
  type: 'exploration',
  key: 'whitecap',
  setTitleId: [127],
  name: 'Whitecap',
  morality: 'heroic',
  zoneKey: TalosIsland.key,
  loc: [-5613, 80, 1855],
  badgeText: `The cargo ship Alba Varden tends to be a hotbed of criminal activity.`,
  notes: `
Located on a ship in the large sea northeast of the main island in the ${zoneLink(TalosIsland)} zone.

The ship is about 630 yards east of the Ithaca Island marker, and the badge marker is on top of the cabin.`,
  links: [
    { title: 'Whitecap Badge', href: 'https://homecoming.wiki/wiki/Whitecap_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  vidiotMapKey: '3',
}
