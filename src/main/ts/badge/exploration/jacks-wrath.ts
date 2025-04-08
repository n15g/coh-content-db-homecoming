import { BadgeData } from 'coh-content-db'
import { Croatoa } from '../../zone/croatoa'

export const JacksWrath: BadgeData = {
  type: 'exploration',
  key: 'jacks-wrath',
  setTitleId: [1542],
  name: `Jack's Wrath`,
  morality: 'paragon-city-access',
  badgeText: `This path of destruction was made by Jack in Irons, who stormed all the way here from his throne deep in the forests of Croatoa.
The witches of the Cabal were barely able to push Jack back, but not before he destroyed much of their territory.`,
  notes: `Located in the Sunset Ridge neighborhood in the middle of a ruined building 214 yards NNE of the neighborhood marker.`,
  links: [
    { title: `Jack's Wrath Badge`, href: 'https://homecoming.wiki/wiki/Jack%27s_Wrath_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: Croatoa.key, coords: [778, 0, -1495] }, vidiotMapKey: '6' },
  ],
}
