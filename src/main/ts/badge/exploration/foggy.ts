import { BadgeData } from 'coh-content-db'
import { FoundersFalls } from '../../zone/founders-falls'

export const Foggy: BadgeData = {
  type: 'exploration',
  key: 'foggy',
  setTitleId: [134],
  name: 'Foggy',
  releaseDate: '2012-11-30',
  morality: 'paragon-city-access',
  badgeText: `This building is in the final stages of preparing suites for the use of the city's Super Groups.`,
  notes: `Located in The Gaspee neighborhood, by a fountain in front (east) of a tall building 100 yards south of The Gaspee marker.`,
  links: [
    { title: 'Foggy Badge', href: 'https://homecoming.wiki/wiki/Foggy_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: FoundersFalls.key, coords: [968, 0, 2621], icon: 'badge', iconText: '1' } },
  ],
}
