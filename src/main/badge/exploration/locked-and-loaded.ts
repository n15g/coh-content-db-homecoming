import { BadgeData, zoneLink } from 'coh-content-db'
import { NervaArchipelago } from '../../zone/nerva-archipelago'

export const LockedAndLoaded: BadgeData = {
  type: 'EXPLORATION',
  key: 'locked-and-loaded',
  setTitle: { id: 275 },
  name: [{ value: 'Locked and Loaded' }],
  alignment: ['V'],
  badgeText: [
    { alignment: 'H', value: `This is the spot where many Longbow Agents have trained to take villains down.` },
    { alignment: 'V', value: `This is the spot where many Longbow Agents have trained to take you down.` },
  ],
  zoneKey: NervaArchipelago.key,
  loc: [3286, 126, 3645],
  notes: `Located in ${zoneLink(NervaArchipelago)}, in the Agincourt neighborhood.

It is located under a shed with mesh-net walls 120 yards north-northeast of the Agincourt marker.`,
  links: [
    { title: 'Locked and Loaded Badge', href: 'https://homecoming.wiki/wiki/Locked_and_Loaded_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' }],
  vidiotMapKey: '2',
}
