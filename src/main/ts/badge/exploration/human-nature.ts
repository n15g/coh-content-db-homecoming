import { BadgeData } from 'coh-content-db'
import { Cimerora } from '../../zone/cimerora'

export const HumanNature: BadgeData = {
  type: 'exploration',
  key: 'human-nature',
  setTitleId: [2466],
  name: 'Human Nature',
  morality: 'all',
  badgeText: `Deep inside Castellum Quarter, soldiers once loyal to Imperious now plot his downfall. Despite alien and magical influence, it was just the basic nature of humanity to follow the strong, regardless of their morality, that helped swell Romulus' ranks.`,
  notes: `Located in front of the doors of a building at the center of the northern edge of Castellum Quarter, 451 yards north of the Castellum Quarter neighborhood marker.`,
  links: [
    { title: 'Human Nature Badge', href: 'https://homecoming.wiki/wiki/Human_Nature_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: Cimerora.key, coords: [-976, 227.8, 1390] }, vidiotMapKey: '6' },
  ],
}
