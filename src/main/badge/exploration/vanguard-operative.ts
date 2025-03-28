import { BadgeData, zoneLink } from 'coh-content-db'
import { RiktiWarZone } from '../../zone/rikti-war-zone'

export const VanguardOperative: BadgeData = {
  type: 'EXPLORATION',
  key: 'vanguard-operative',
  setTitle: { id: 747 },
  name: [{ value: 'Vanguard Operative' }],
  alignment: ['H', 'V', 'P'],
  zoneKey: RiktiWarZone.key,
  loc: [328, -69, -2444.5],
  badgeText: [{ value: 'You have entered the Vanguard base where all your efforts will now go towards fighting the Rikti. The Vanguard and your natural enemies are now your allies.' }],
  notes: `The Vanguard Operative Badge is located in Vanguard Base in the ${zoneLink(RiktiWarZone)}.
    
          The badge marker is invisible, located about 25 feet in front of the contact Borea.`,
  links: [
    { title: 'Vanguard Operative Badge', href: 'hhttps://homecoming.wiki/wiki/Vanguard_Operative_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' },
  ],
  vidiotMapKey: '1',
}
