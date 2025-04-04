import { BadgeData, zoneLink } from 'coh-content-db'
import { SkywayCity } from '../../zone/skyway-city'
import { BloodyBay } from '../../zone/bloody-bay'

export const HealingNode: BadgeData = {
  type: 'exploration',
  key: 'healing-node',
  setTitleId: [113],
  name: 'Healing Node',
  morality: 'heroic',
  zoneKey: SkywayCity.key,
  loc: [1577, -84, -677],
  badgeText: `The MedCom is the teleportation network that can send fallen heroes directly to the hospital for treatment.
This node is the center of the network; the other nodes are on the outskirts of the city.`,
  notes: `Located approx. 280 yards due west of the midpoint between the Land of the Lost marker and the helicopter to ${zoneLink(BloodyBay)}, on the lowest layer of the map.

The badge marker is located just to the right of Vitaly Cherenko, a contact in the Land of the Lost neighborhood.`,
  links: [
    { title: 'Healing Node Badge', href: 'https://homecoming.wiki/wiki/Healing_Node_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  vidiotMapKey: '4',
}
