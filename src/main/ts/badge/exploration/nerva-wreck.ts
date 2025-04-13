import { BadgeData } from 'coh-content-db'
import { NervaArchipelago } from '../../zone/nerva-archipelago'

export const NervaWreck: BadgeData = {
  type: 'exploration',
  key: 'nerva-wreck',
  setTitleId: [276],
  name: 'Nerva Wreck',
  morality: 'rogue-isles-access',
  badgeText: `You have visited the famous Nerva Wreck. What strange creature might have caused this disaster?`,
  notes: `Located in the Primeva neighborhood, on the lowest rock outcropping near the shipwreck at the river’s mouth, where it meets the largest island.
Approximately 533 yards southeast of the Primeva marker or the northernmost Quartermaster.`,
  links: [
    { title: 'Nerva Wreck Badge', href: 'https://homecoming.wiki/wiki/Nerva_Wreck_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: NervaArchipelago.key, coords: [1388, 10, 2876], icon: 'badge', iconText: '3' } },
  ],
}
