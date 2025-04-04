import { BadgeData } from 'coh-content-db'
import { EchoAtlasPark } from '../../zone/echo-atlas-park'

export const Condemned: BadgeData = {
  type: 'exploration',
  key: 'condemned',
  setTitleId: [2323],
  name: 'Condemned',
  morality: 'heroic',
  badgeText: `The properties along Miller Street have been condemned and will be demolished and replaced with new attractions within a few years.`,
  zoneKey: EchoAtlasPark.key,
  loc: [-543, 15.8, -900.3],
  notes: `Located on a brown brick building 289 yards NE of the Atlas Plaza marker, on the overhanging roof above a pair of double-doors.`,
  links: [
    { title: 'Echo: Atlas Park Badge Guide', href: 'https://forums.homecomingservers.com/topic/881-echo-atlas-park-badge-guide/' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  vidiotMapKey: '7',
}
