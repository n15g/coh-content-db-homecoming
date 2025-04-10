import { BadgeData } from 'coh-content-db'
import { SkywayCity } from '../../zone/skyway-city'

export const BridgeToNowhere: BadgeData = {
  type: 'exploration',
  key: 'bridge-to-nowhere',
  setTitleId: [1538],
  name: 'Bridge to Nowhere',
  morality: 'paragon-city-access',
  badgeText: `The construction of Skyway's next set of bridges was halted by the first Rikti War and remains on hold.
Citizens walking nearby constantly look at this bridge with some fear, noticing that its foundations grow weaker by the day.
It may be only a matter of time until this bridge collapses.`,
  notes: `Located in The Gruff neighborhood, in the middle of a free-standing section of bridge 490 yards SSE of the north Paragon City Monorail station.`,
  links: [
    { title: 'Bridge to Nowhere Badge', href: 'https://homecoming.wiki/wiki/Bridge_to_Nowhere_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: SkywayCity.key, coords: [251, -12, -3644], icon: 'badge', iconText: '8' } },
  ],
}
