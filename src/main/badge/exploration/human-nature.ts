import { BadgeData, mapLink } from 'coh-content-db'
import { Cimerora } from '../../map/cimerora'

export const HumanNature: BadgeData = {
  type: 'EXPLORATION',
  key: 'human-nature',
  setTitle: { id: 2466 },
  name: [{ value: 'Human Nature' }],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: `Deep inside Castellum Quarter, soldiers once loyal to Imperious now plot his downfall. Despite alien and magical influence, it was just the basic nature of humanity to follow the strong, regardless of their morality, that helped swell Romulus' ranks.` }],
  mapKey: Cimerora.key,
  loc: [-976, 227.8, 1390],
  notes: `Located in ${mapLink(Cimerora)} in front of the doors of a building at the center of the northern edge of Castellum Quarter, 451 yards north of the Castellum Quarter neighborhood marker.`,
  links: [
    { title: 'Human Nature Badge', href: 'https://homecoming.wiki/wiki/Human_Nature_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  vidiotMapKey: '6',
}
