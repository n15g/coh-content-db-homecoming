import { BadgeData } from 'coh-content-db'
import { NervaArchipelago } from '../../map/nerva-archipelago'

export const BlindEye: BadgeData = {
  type: 'EXPLORATION',
  key: 'blind-eye',
  setTitle: { id: 1502 },
  name: [{ value: 'Blind Eye' }],
  alignment: ['V'],
  mapKey: NervaArchipelago.key,
  loc: [3526, 141, 3886],
  badgeText: [{
    value: `Longbow uses these state-of-the-art facilities to perform experiments on a small group of monsters they encounter.
Longbow policy dictates that they turn their charges in to the proper authorities back in Paragon, but Agincourt officials routinely turn a blind eye to this facility's activities.`,
  }],
  notes: `Located in [map:${NervaArchipelago.key}], in the Agincourt neighborhood.

It is in the specimen building 58 yards beneath the neighborhood marker.`,
  links: [
    { title: 'Blind Eye Badge', href: 'https://homecoming.wiki/wiki/Blind_Eye_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' }],
  vidiotMapKey: '7',
}
