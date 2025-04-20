import { BadgeData } from 'coh-content-db'
import { RiktiWarZone } from '../../zone/rikti-war-zone'

export const VanguardOperative: BadgeData = {
  type: 'exploration',
  key: 'vanguard-operative',
  setTitleId: [747],
  name: 'Vanguard Operative',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'You have entered the Vanguard base where all your efforts will now go towards fighting the Rikti. The Vanguard and your natural enemies are now your allies.',
  notes: `Located in the Vanguard Base, about 25 feet in front of the contact Borea.
  
**Note:** The badge marker is invisible.`,
  links: [
    { title: 'Vanguard Operative Badge', href: 'https://homecoming.wiki/wiki/Vanguard_Operative_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: RiktiWarZone.key, coords: [328, -69, -2444.5], icon: 'badge', iconText: '1' } },
  ],
}
