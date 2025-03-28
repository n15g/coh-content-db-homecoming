import { BadgeData } from 'coh-content-db'
import { SteelCanyon } from '../../zone/steel-canyon'

export const BrightStar: BadgeData = {
  type: 'EXPLORATION',
  key: 'bright-star',
  setTitle: { id: 109 },
  name: [{ value: 'Bright Star' }],
  alignment: ['H'],
  zoneKey: SteelCanyon.key,
  loc: [-3001.3, -26.2, 1830],
  badgeText: [{
    value: 'The first Luminary used her light-based powers to disrupt the formation of a large portal to the Rikti homeworld on this spot.',
  }],
  notes: 'The Bright Star Badge is in the Gimry Ridge neighborhood of Steel Canyon. It is on top of one of the perimeter buildings around the Paragon City University building.'
    + '\n\nIt is located on a ledge between the northeasternmost building on the campus and the building just west of it.',
  links: [
    { title: 'Bright Star Badge', href: 'https://homecoming.wiki/wiki/Bright_Star_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' }],
  vidiotMapKey: '4',
}
