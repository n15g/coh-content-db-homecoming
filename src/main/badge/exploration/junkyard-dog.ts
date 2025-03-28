import { BadgeData, zoneLink } from 'coh-content-db'
import { RiktiWarZone } from '../../zone/rikti-war-zone'

export const JunkyardDog: BadgeData = {
  type: 'EXPLORATION',
  key: 'junkyard-dog',
  setTitle: { id: 755 },
  name: [{ value: 'Junkyard Dog' }],
  alignment: ['H', 'V', 'P'],
  zoneKey: RiktiWarZone.key,
  loc: [1474, 0, -3722],
  badgeText: [{ value: 'This is where some military vehicles went to die.' }],
  notes: `The Junkyard Dog Badge is located in Heartbreak Ridge neighborhood of the ${zoneLink(RiktiWarZone)}. It can be found 118 east of the Heartbreak Ridge zone marker.`,
  links: [
    { title: 'Junkyard Dog Badge', href: 'https://homecoming.wiki/wiki/Junkyard_Dog_Badge' },
    { title: 'Updated RWZ Vidiot Map', href: 'https://forums.homecomingservers.com/topic/969-rikti-war-zone-badges-missing/?do=findComment&comment=27161' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' },
  ],
  vidiotMapKey: '7',
}
