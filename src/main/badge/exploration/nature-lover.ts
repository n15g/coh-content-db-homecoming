import { BadgeData, zoneLink } from 'coh-content-db'
import { TalosIsland } from '../../zone/talos-island'

export const NatureLover: BadgeData = {
  type: 'EXPLORATION',
  key: 'nature-lover',
  setTitle: { id: 126 },
  name: [
    { alignment: 'H', value: 'Nature Lover' },
    { alignment: 'V', value: 'Eco-warrior' },
  ],
  alignment: ['H'],
  zoneKey: TalosIsland.key,
  loc: [2672, 124, 9117],
  badgeText: [{
    value: `Mechanus was one of Woodsman's greatest enemies. It was on this spot that the champion of nature defeated the artificially intelligent robot for the final time.`,
  }],
  notes: `Located in the western part of the Argo Highway neighborhood of ${zoneLink(TalosIsland)}, 874 yards west of the Argo Highway marker.

The island it is on is the island that is cut by the western war wall, and the badge marker is just east of the tall rock outcropping in the center of the island.`,
  links: [
    { title: 'Nature Lover Badge', href: 'https://homecoming.wiki/wiki/Nature_Lover_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' }],
  vidiotMapKey: '2',
}
