import { BadgeData, zoneLink } from 'coh-content-db'
import { SkywayCity } from '../../zone/skyway-city'
import { Faultline } from '../../zone/faultline'
import { BloodyBay } from '../../zone/bloody-bay'

export const RoomForExpansion: BadgeData = {
  type: 'exploration',
  key: 'room-for-expansion',
  setTitleId: [1536],
  name: 'Room for Expansion',
  morality: 'paragon-city-access',
  badgeText: `With Faultline gaining traffic, many people are calling for more apartments to be built in this area and for Longbow to move their Bloody Bay heli-pad to another location.
Longbow refuses however, stating this is the safest place for them to be, and that they are also keeping the Lost of the area in check.`,
  notes: `Located at the entrance of the parking lot between the ${zoneLink(Faultline)} and ${zoneLink(BloodyBay)} zone connections.`,
  links: [
    { title: 'Room for Expansion Badge', href: 'https://homecoming.wiki/wiki/Room_for_Expansion_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: SkywayCity.key, coords: [687, 0, -141] }, vidiotMapKey: '6' },
  ],
}
