import { BadgeData, zoneLink } from 'coh-content-db'
import { UndergroundImperial } from '../../zone/underground-imperial'

export const Lowlife: BadgeData = {
  type: 'EXPLORATION',
  key: 'lowlife',
  setTitle: { id: 1650 },
  name: [{ value: 'Lowlife' }],
  alignment: ['H', 'V', 'P'],
  zoneKey: UndergroundImperial.key,
  loc: [-862, 272, -5215],
  badgeText: [{
    value: 'You stand at the lowest point in the entire Praetorian Underground network, the tunnel that dips beneath the channel separating the Behavioral Adjustment Facility from the mainland.'
      + ' You are now lower than any other life form in Praetoria. Congratulations!',
  }],
  notes: `Located in ${zoneLink(UndergroundImperial)} halfway up the red (on the map) hallway, 350 yds. NW of City Access B.`,
  links: [
    { title: 'Lowlife Badge', href: 'https://homecoming.wiki/wiki/Lowlife_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png' }],
  vidiotMapKey: '6',
}
