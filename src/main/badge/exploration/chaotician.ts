import { BadgeData, mapLink } from 'coh-content-db'
import { FoundersFalls } from '../../map/founders-falls'

export const Chaotician: BadgeData = {
  type: 'EXPLORATION',
  key: 'chaotician',
  setTitle: { id: 135 },
  name: [{ value: 'Chaotician' }],
  alignment: ['H'],
  mapKey: FoundersFalls.key,
  loc: [815, -21, 2402],
  badgeText: [{
    value: 'Professor Xaos brought Paragon City to its knees shortly after the Rikti War with his Mandelbrot Device. Synapse and Positron were able to work together for once and saved the city.',
  }],
  notes: `Located in The Gaspee neighborhood of ${mapLink(FoundersFalls)}. It is located in the water 90 yards east-southeast of The Gaspee marker in a northwest-southeast tunnel under the city block.

The marker is halfway into the tunnel entrance closest to The Gaspee marker.`,
  links: [
    { title: 'Chaotician Badge', href: 'https://homecoming.wiki/wiki/Chaotician_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' }],
  vidiotMapKey: '2',
}
