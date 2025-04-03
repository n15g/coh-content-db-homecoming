import { BadgeData, zoneLink } from 'coh-content-db'
import { Ouroboros } from '../../zone/ouroboros'
import { VinceDubrowski } from '../../contact/vince-dubrowski'

export const SlagReaper: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'slag-reaper',
  setTitle: { id: 337 },
  name: 'Slag Reaper',
  alignment: ['V'],
  badgeText: 'The weird coral of Sharkhead Isle is said to have mystical properties.',
  notes: `To get this badge in ${zoneLink(Ouroboros)}, a villain can select the "Retrieve Crash's Shipment" entry with number 6.32 in the 20-24 level range.`,
  links: [
    { title: 'Slag Reaper Badge', href: 'https://homecoming.wiki/wiki/Slag_Reaper_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/stature-4.png',
  requirements: [
    { key: 'swcw', type: 'MISSION', missionName: 'See what Crash wants', contactKey: VinceDubrowski.key },
  ],
}
