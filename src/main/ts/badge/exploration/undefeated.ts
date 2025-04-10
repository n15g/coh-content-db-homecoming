import { BadgeData, zoneLink } from 'coh-content-db'
import { AtlasPark } from '../../zone/atlas-park'
import { SteelCanyon } from '../../zone/steel-canyon'

export const Undefeated: BadgeData = {
  type: 'exploration',
  key: 'undefeated',
  setTitleId: [86],
  name: 'Undefeated',
  morality: 'paragon-city-access',
  badgeText: `Here is where one of the brave souls to take up the mantle of Scirocco stood against, and fell to, the Rikti invaders.`,
  notes: `Located in the Promenade neighborhood, on a lower ledge on the east side of a building, 70 yards SE of the ${zoneLink(SteelCanyon)} gate.`,
  links: [
    { title: 'Undefeated Badge', href: 'https://homecoming.wiki/wiki/Undefeated_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: AtlasPark.key, coords: [545, 59, -2307], icon: 'badge', iconText: '1' } },
  ],
}
