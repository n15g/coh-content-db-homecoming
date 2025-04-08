import { BadgeData } from 'coh-content-db'
import { RiktiWarZone } from '../../zone/rikti-war-zone'

export const Homewrecker: BadgeData = {
  type: 'exploration',
  key: 'homewrecker',
  setTitleId: [753],
  name: 'Homewrecker',
  morality: 'all',
  badgeText: `This is the base Malta likes to call home. Your name wasn't exactly on the welcome mat.`,
  notes: `Located 345 yards south-west of the Little Round Top zone marker.`,
  links: [
    { title: 'Homewrecker Badge', href: 'https://homecoming.wiki/wiki/Homewrecker_Badge' },
    { title: 'Updated RWZ Vidiot Map', href: 'https://forums.homecomingservers.com/topic/969-rikti-war-zone-badges-missing/?do=findComment&comment=27161' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: RiktiWarZone.key, coords: [3566, 0, -759] }, vidiotMapKey: '5' },
  ],
}
