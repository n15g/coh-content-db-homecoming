import { BadgeData } from 'coh-content-db'
import { FoundersFalls } from '../../zone/founders-falls'

export const Chaotician: BadgeData = {
  type: 'exploration',
  key: 'chaotician',
  setTitleId: [135],
  name: 'Chaotician',
  morality: 'paragon-city-access',
  badgeText: `Professor Xaos brought Paragon City to its knees shortly after the Rikti War with his Mandelbrot Device. Synapse and Positron were able to work together for once and saved the city.`,
  notes: `Located in The Gaspee neighborhood, in the water 90 yards east-southeast of The Gaspee marker in a northwest-southeast tunnel under the city block.
The marker is halfway into the tunnel entrance closest to The Gaspee marker.`,
  links: [
    { title: 'Chaotician Badge', href: 'https://homecoming.wiki/wiki/Chaotician_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: FoundersFalls.key, coords: [815, -21, 2402] }, vidiotMapKey: '2' },
  ],
}
