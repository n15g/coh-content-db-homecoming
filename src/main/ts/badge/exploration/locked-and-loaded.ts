import { BadgeData } from 'coh-content-db'
import { NervaArchipelago } from '../../zone/nerva-archipelago'

export const LockedAndLoaded: BadgeData = {
  type: 'exploration',
  key: 'locked-and-loaded',
  setTitleId: [275],
  name: 'Locked and Loaded',
  morality: 'rogue-isles-access',
  badgeText: [
    { alignment: 'hero', value: `This is the spot where many Longbow Agents have trained to take villains down.` },
    { alignment: 'villain', value: `This is the spot where many Longbow Agents have trained to take you down.` },
  ],
  notes: `Located in the Agincourt neighborhood, under a shed with mesh-net walls 120 yards north-northeast of the zone marker.`,
  links: [
    { title: 'Locked and Loaded Badge', href: 'https://homecoming.wiki/wiki/Locked_and_Loaded_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: NervaArchipelago.key, coords: [3286, 126, 3645] }, vidiotMapKey: '2' },
  ],
}
