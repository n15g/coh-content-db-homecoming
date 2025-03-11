import { BadgeData } from 'coh-content-db'
import { EchoAtlasPark } from '../../map/echo-atlas-park'

export const Trustworthy: BadgeData = {
  type: 'EXPLORATION',
  key: 'trustworthy',
  setTitle: { id: 2367 },
  name: [{ value: 'Trustworthy' }],
  alignment: ['H'],
  badgeText: [{ value: `Mystics all over the world entrust MAGI with powerful artifacts.` }],
  mapKey: EchoAtlasPark.key,
  loc: [-129.2, -783.8, -805.4],
  notes: 'Located next to the large green crystal in the MAGI office.',
  links: [
    { title: 'Echo: Atlas Park Badge Guide', href: 'https://forums.homecomingservers.com/topic/881-echo-atlas-park-badge-guide/' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
  ],
  vidiotMapKey: '1',
}
