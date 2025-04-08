import { BadgeData } from 'coh-content-db'
import { EchoGalaxyCity } from '../../zone/echo-galaxy-city'

export const BirdWatcher: BadgeData = {
  type: 'exploration',
  key: 'bird-watcher',
  setTitleId: [91],
  name: 'Bird Watcher',
  morality: 'paragon-city-access',
  badgeText: `The Invisible Falcon disappeared without a trace in the mid 90's.`,
  notes: `The Bird Watcher Badge is in the Orion Beltway neighborhood, 87 yds south east of the Orion Beltway marker.
  
There is a brown building on the left (east), across from Major Flanders, City of Gyros, and Paragon City Pizza.

The badge marker is on the lowest ledge on the northeastern corner of the building. Though not directly accessible, there is a fire escape that leads up the eastern side of the building.
A non-airborne hero may access the badge by climbing up the fire escape and jumping to the ledge from a higher height.`,
  links: [
    { title: 'Bird Watcher Badge', href: 'https://homecoming.wiki/wiki/Bird_Watcher_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: EchoGalaxyCity.key, coords: [-1099, 48, -2264] }, vidiotMapKey: '1' },
  ],
}
