import { BadgeData } from 'coh-content-db'
import { EchoAtlasPark } from '../../zone/echo-atlas-park'

export const SilentSentinel: BadgeData = {
  type: 'exploration',
  key: 'silent-sentinel',
  setTitleId: [87],
  name: 'Silent Sentinel',
  morality: 'paragon-city-access',
  badgeText: `In the 1950's the hero called 'Gargoyle' would stand watch over the city from this spot.`,
  notes: `Located 216 yards east-southeast of The Promenade neighborhood marker.

The badge sits on the first ledge up from ground level on the north side of a high-rise building`,
  links: [
    { title: 'Silent Sentinel Badge', href: 'https://homecoming.wiki/wiki/Silent_Sentinel_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: EchoAtlasPark.key, coords: [-608, 70.3, -1890], icon: 'badge', iconText: '2' } },
  ],
}
