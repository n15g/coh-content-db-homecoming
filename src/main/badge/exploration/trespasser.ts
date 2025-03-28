import { BadgeData } from 'coh-content-db'
import { RiktiWarZone } from '../../zone/rikti-war-zone'

export const Trespasser: BadgeData = {
  type: 'EXPLORATION',
  key: 'trespasser',
  setTitle: { id: 748 },
  name: [{ value: 'Trespasser' }],
  alignment: ['H', 'V', 'P'],
  zoneKey: RiktiWarZone.key,
  loc: [978, 2, -737],
  badgeText: [{ value: 'You have managed to get into the Crey base of operations. Nice work. Now how do you plan to get out?' }],
  notes: 'The Trespasser Badge is located in the The Bulge neighborhood of the ${zoneLink(RiktiWarZone)}.\n'
    + '\n'
    + 'It is 290 yards southwest of the Bulge marker.\n'
    + '\n'
    + 'Look for two Crey logos on a building. It\'s on the ground in the open on the left hand side of that building, and usually has Crey mobs on top of it or near by it.',
  links: [
    { title: 'Trespasser Badge', href: 'https://homecoming.wiki/wiki/Trespasser_Badge' },
    { title: 'Updated RWZ Vidiot Map', href: 'https://forums.homecomingservers.com/topic/969-rikti-war-zone-badges-missing/?do=findComment&comment=27161' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' },
  ],
  vidiotMapKey: '2',
}
