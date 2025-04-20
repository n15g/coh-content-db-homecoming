import { BadgeData } from 'coh-content-db'
import { RiktiWarZone } from '../../zone/rikti-war-zone'

export const JunkyardDog: BadgeData = {
  type: 'exploration',
  key: 'junkyard-dog',
  setTitleId: [755],
  name: 'Junkyard Dog',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'This is where some military vehicles went to die.',
  notes: `Located in Heartbreak Ridge neighborhood, 118 yards east of the Heartbreak Ridge zone marker.`,
  links: [
    { title: 'Junkyard Dog Badge', href: 'https://homecoming.wiki/wiki/Junkyard_Dog_Badge' },
    { title: 'Updated RWZ Vidiot Map', href: 'https://forums.homecomingservers.com/topic/969-rikti-war-zone-badges-missing/?do=findComment&comment=27161' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: RiktiWarZone.key, coords: [1474, 0, -3722], icon: 'badge', iconText: '7' } },
  ],
}
