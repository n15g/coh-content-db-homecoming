import { BadgeData } from 'coh-content-db'
import { RiktiWarZone } from '../../map/rikti-war-zone'

export const Lifesaver: BadgeData = {
  type: 'EXPLORATION',
  key: 'lifesaver',
  setTitle: { id: 750 },
  name: [{ value: 'Lifesaver' }],
  alignment: ['H', 'V', 'P'],
  mapKey: RiktiWarZone.key,
  loc: [-425, 15, -206],
  badgeText: [{ value: 'Rikti\'s continuous attacks on this hospital prompted Paragon City officials to shut it down.' }],
  notes: 'The Lifesaver Badge is located in the northeast corner of the Pavia neighborhood of the [map:${RiktiWarZone.key}].',
  links: [
    { title: 'Lifesaver Badge', href: 'https://homecoming.wiki/wiki/Lifesaver_Badge' },
    { title: 'Updated RWZ Vidiot Map', href: 'https://forums.homecomingservers.com/topic/969-rikti-war-zone-badges-missing/?do=findComment&comment=27161' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' },
  ],
  vidiotMapKey: '3',
}
