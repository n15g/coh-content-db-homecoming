import { BadgeData } from 'coh-content-db'
import { Brickstown } from '../../zone/brickstown'

export const ForwardThinker: BadgeData = {
  type: 'exploration',
  key: 'forward-thinker',
  setTitleId: [1567],
  name: 'Forward Thinker',
  morality: 'paragon-city-access',
  badgeText: `The Mashu bridge was built in Brickstown long before construction on the Zig began.
Traffic was heavy in Brickstown, causing a need for this bridge to be constructed.
It was only shortly afterward that plans for the Zig were created, driving the majority of business owners out from Brickstown and into Steel Canyon, rendering Mashu bridge nothing but an odd landmark.`,
  notes: `Located on the Mashu Bridge, 97 feet east of the neighborhood marker.`,
  links: [
    { title: 'Forward Thinker Badge', href: 'https://homecoming.wiki/wiki/Forward_Thinker_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: Brickstown.key, coords: [254, 31.8, -1343.5] }, vidiotMapKey: '5' },
  ],
}
