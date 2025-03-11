import { BadgeData } from 'coh-content-db'
import { EchoAtlasPark } from '../../map/echo-atlas-park'

export const Condemned: BadgeData = {
  type: 'EXPLORATION',
  key: 'condemned',
  setTitle: { id: 2323 },
  name: [{ value: 'Condemned' }],
  alignment: ['H'],
  badgeText: [{ value: `The properties along Miller Street have been condemned and will be demolished and replaced with new attractions within a few years.` }],
  mapKey: EchoAtlasPark.key,
  loc: [-543, 15.8, -900.3],
  notes: `There's a brown brick building 289 yards NE of the Atlas Plaza marker, the badge is on the overhanging roof above a pair of double-doors on this building.`,
  links: [
    { title: 'Echo: Atlas Park Badge Guide', href: 'https://forums.homecomingservers.com/topic/881-echo-atlas-park-badge-guide/' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
  ],
  vidiotMapKey: '7',
}
