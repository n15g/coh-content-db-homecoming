import { BadgeData } from 'coh-content-db'
import { RiktiWarZone } from '../../zone/rikti-war-zone'

export const Lifesaver: BadgeData = {
  type: 'exploration',
  key: 'lifesaver',
  setTitleId: [750],
  name: 'Lifesaver',
  morality: 'all',
  badgeText: `Rikti's continuous attacks on this hospital prompted Paragon City officials to shut it down.`,
  notes: `Located in the northeast corner of the Pavia neighborhood.`,
  links: [
    { title: 'Lifesaver Badge', href: 'https://homecoming.wiki/wiki/Lifesaver_Badge' },
    { title: 'Updated RWZ Vidiot Map', href: 'https://forums.homecomingservers.com/topic/969-rikti-war-zone-badges-missing/?do=findComment&comment=27161' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: RiktiWarZone.key, coords: [-425, 15, -206] }, vidiotMapKey: '3' },
  ],
}
