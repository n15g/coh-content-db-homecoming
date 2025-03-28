import { BadgeData } from 'coh-content-db'
import { EchoAtlasPark } from '../../zone/echo-atlas-park'

export const SilentSentinel: BadgeData = {
  type: 'EXPLORATION',
  key: 'silent-sentinel',
  setTitle: { id: 87 },
  name: [{ value: 'Silent Sentinel' }],
  alignment: ['H'],
  zoneKey: EchoAtlasPark.key,
  loc: [-608, 70.3, -1890],
  badgeText: [{
    value: `In the 1950's the hero called 'Gargoyle' would stand watch over the city from this spot.`,
  }],
  notes: 'Located 216 yards east-southeast of The Promenade neighborhood marker. The badge sits on the first ledge up from ground level on the north side of a high-rise building',
  links: [
    { title: 'Silent Sentinel Badge', href: 'https://homecoming.wiki/wiki/Silent_Sentinel_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' }],
  vidiotMapKey: '2',
}
