import { BadgeData } from 'coh-content-db'
import { NervaArchipelago } from '../../zone/nerva-archipelago'

export const BlindEye: BadgeData = {
  type: 'exploration',
  key: 'blind-eye',
  setTitleId: [1502],
  name: 'Blind Eye',
  morality: 'rogue-isles-access',
  badgeText: `Longbow uses these state-of-the-art facilities to perform experiments on a small group of monsters they encounter.
Longbow policy dictates that they turn their charges in to the proper authorities back in Paragon, but Agincourt officials routinely turn a blind eye to this facility's activities.`,
  notes: `Located in the Agincourt neighborhood,in the specimen building 58 yards beneath the neighborhood marker.`,
  links: [
    { title: 'Blind Eye Badge', href: 'https://homecoming.wiki/wiki/Blind_Eye_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: NervaArchipelago.key, coords: [3526, 141, 3886], icon: 'badge', iconText: '7' } },
  ],
}
