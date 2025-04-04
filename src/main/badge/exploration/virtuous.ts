import { BadgeData } from 'coh-content-db'
import { EchoAtlasPark } from '../../zone/echo-atlas-park'

export const Virtuous: BadgeData = {
  type: 'exploration',
  key: 'virtuous',
  setTitleId: [1220],
  name: 'Virtuous',
  morality: 'heroic',
  badgeText: `Throughout Atlas Park and the rest of Paragon City there are numerous statues of heroes who fell in battle while defending their beliefs.`,
  zoneKey: EchoAtlasPark.key,
  loc: [965.1, -26.7, -753.7],
  notes: 'Located at the foot of the statue in Promethous Park\'s lake.',
  links: [
    { title: 'Echo: Atlas Park Badge Guide', href: 'https://forums.homecomingservers.com/topic/881-echo-atlas-park-badge-guide/' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  vidiotMapKey: '2',
}
