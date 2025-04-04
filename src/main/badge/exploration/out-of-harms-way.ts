import { BadgeData } from 'coh-content-db'
import { EchoAtlasPark } from '../../zone/echo-atlas-park'

export const OutOfHarmsWay: BadgeData = {
  type: 'exploration',
  key: 'out-of-harms-way',
  setTitleId: [2322],
  name: `Out of Harm's Way`,
  morality: 'heroic',
  badgeText: `When the Rikti invaded, their drop ships scattered bombs from every corner of the sky. Tunnels like this one were strong enough to withstand the blasts.`,
  zoneKey: EchoAtlasPark.key,
  loc: [1150.1, 0, -1597.5],
  notes: `Located 264 yards North of the Prometheus Park marker, in an east-west traffic tunnel/underpass.`,
  links: [
    { title: 'Echo: Atlas Park Badge Guide', href: 'https://forums.homecomingservers.com/topic/881-echo-atlas-park-badge-guide/' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  vidiotMapKey: '6',
}
