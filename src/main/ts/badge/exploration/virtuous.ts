import { BadgeData } from 'coh-content-db'
import { EchoAtlasPark } from '../../zone/echo-atlas-park'

export const Virtuous: BadgeData = {
  type: 'exploration',
  key: 'virtuous',
  setTitleId: [1220],
  name: 'Virtuous',
  morality: 'paragon-city-access',
  badgeText: `Throughout Atlas Park and the rest of Paragon City there are numerous statues of heroes who fell in battle while defending their beliefs.`,
  notes: `Located at the foot of the statue in Promethous Park's lake.`,
  links: [
    { title: 'Echo: Atlas Park Badge Guide', href: 'https://forums.homecomingservers.com/topic/881-echo-atlas-park-badge-guide/' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: EchoAtlasPark.key, coords: [965.1, -26.7, -753.7] }, vidiotMapKey: '2' },
  ],
}
