import { BadgeData, zoneLink } from 'coh-content-db'
import { PerezPark } from '../../zone/perez-park'
import { AtlasPark } from '../../zone/atlas-park'

export const Territorial: BadgeData = {
  type: 'exploration',
  key: 'territorial',
  setTitleId: [101],
  name: 'Territorial',
  releaseDate: '2012-11-30',
  morality: 'paragon-city-access',
  badgeText: `The territory around this bridge has been hotly contested turf between the Skulls and Hellions for some time now.`,
  notes: `Located 44 yards east of the Perez Park neighborhood marker in the maze under the trees.

Enter the tree maze from the east side almost straight west of the ${zoneLink(AtlasPark)} entrance.`,
  links: [
    { title: 'Territorial Badge', href: 'https://homecoming.wiki/wiki/Territorial_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: PerezPark.key, coords: [-2015, -56, 1586], icon: 'badge', iconText: '1' } },
  ],
}
