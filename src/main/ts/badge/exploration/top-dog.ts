import { BadgeData } from 'coh-content-db'
import { AtlasPark } from '../../zone/atlas-park'

export const TopDog: BadgeData = {
  type: 'exploration',
  key: 'top-dog',
  setTitleId: [90],
  name: 'Top Dog',
  morality: 'paragon-city-access',
  badgeText: `The top of Atlas' statue is the first place many flying heroes will go.`,
  notes: `Located in the Atlas Plaza neighborhood, at the apex of the globe atop the Atlas statue.`,
  links: [
    { title: 'Top Dog Badge', href: 'https://homecoming.wiki/wiki/Top_Dog_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: AtlasPark.key, coords: [131, 320, -319.5], icon: 'badge', iconText: '5' } },
  ],
}
