import { BadgeData } from 'coh-content-db'
import { UndergroundImperial } from '../../zone/underground-imperial'

export const Lowlife: BadgeData = {
  type: 'exploration',
  key: 'lowlife',
  setTitleId: [1650],
  name: 'Lowlife',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `You stand at the lowest point in the entire Praetorian Underground network, the tunnel that dips beneath the channel separating the Behavioral Adjustment Facility from the mainland.
You are now lower than any other life form in Praetoria. Congratulations!`,
  notes: `Located halfway up the red (on the map) hallway, 350 yds. NW of City Access B.`,
  links: [
    { title: 'Lowlife Badge', href: 'https://homecoming.wiki/wiki/Lowlife_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: UndergroundImperial.key, coords: [-862, 272, -5215], icon: 'badge', iconText: '6' } },
  ],
}
