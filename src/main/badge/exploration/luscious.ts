import { BadgeData, mapLink } from 'coh-content-db'
import { RiktiWarZone } from '../../map/rikti-war-zone'

export const Luscious: BadgeData = {
  type: 'EXPLORATION',
  key: 'luscious',
  setTitle: { id: 754 },
  name: [{ value: 'Luscious' }],
  alignment: ['H', 'V', 'P'],
  mapKey: RiktiWarZone.key,
  loc: [4243, -24, -1862],
  badgeText: [{ value: 'The Devouring Earth have chosen this spot to start bringing paradise back to a war-torn city.' }],
  notes: `The Luscious Badge is located in Bloody Lane neighborhood of the ${mapLink(RiktiWarZone)}, 90 yds west of the Bloody Lane neighborhood marker.`,
  links: [
    { title: 'Luscious Badge', href: 'https://homecoming.wiki/wiki/Luscious_Badge' },
    { title: 'Updated RWZ Vidiot Map', href: 'https://forums.homecomingservers.com/topic/969-rikti-war-zone-badges-missing/?do=findComment&comment=27161' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' },
  ],
  vidiotMapKey: '6',
}
