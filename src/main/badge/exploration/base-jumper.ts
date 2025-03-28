import { BadgeData, zoneLink } from 'coh-content-db'
import { RiktiWarZone } from '../../zone/rikti-war-zone'

export const BaseJumper: BadgeData = {
  type: 'EXPLORATION',
  key: 'base-jumper',
  setTitle: { id: 752 },
  name: [{ value: 'Base Jumper' }],
  alignment: ['H', 'V', 'P'],
  zoneKey: RiktiWarZone.key,
  loc: [3434, 0, 511],
  badgeText: [{ value: 'The Council have taken over this building as their base of operations. You might want to check your back.' }],
  notes: `The Base Jumper Badge is located in Pork Chop Hill neighborhood of the ${zoneLink(RiktiWarZone)}.
    
The badge is located in the foyer of a Council-owned building just southwest of the Pork Chop Hill neighborhood marker.
The building is marked with two large Council banners, with a cream colored foyer, and the marker is located inside behind the reception desk.`,
  links: [
    { title: 'Base Jumper Badge', href: 'https://homecoming.wiki/wiki/Base_Jumper_Badge' },
    { title: 'Updated RWZ Vidiot Map', href: 'https://forums.homecomingservers.com/topic/969-rikti-war-zone-badges-missing/?do=findComment&comment=27161' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' },
  ],
  vidiotMapKey: '4',
}
