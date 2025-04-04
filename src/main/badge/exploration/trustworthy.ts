import { BadgeData } from 'coh-content-db'
import { EchoAtlasPark } from '../../zone/echo-atlas-park'

export const Trustworthy: BadgeData = {
  type: 'exploration',
  key: 'trustworthy',
  setTitleId: [2367],
  name: 'Trustworthy',
  morality: 'heroic',
  badgeText: `Mystics all over the world entrust MAGI with powerful artifacts.`,
  zoneKey: EchoAtlasPark.key,
  loc: [-129.2, -783.8, -805.4],
  notes: 'Located next to the large green crystal in the MAGI office.',
  links: [
    { title: 'Echo: Atlas Park Badge Guide', href: 'https://forums.homecomingservers.com/topic/881-echo-atlas-park-badge-guide/' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  vidiotMapKey: '1',
}
