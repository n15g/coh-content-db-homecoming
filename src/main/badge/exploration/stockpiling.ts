import { BadgeData } from 'coh-content-db'
import { Neutropolis } from '../../map/neutropolis'

export const Stockpiling: BadgeData = {
  type: 'EXPLORATION',
  key: 'stockpiling',
  setTitle: { id: 1728 },
  name: [{ value: 'Stockpiling' }],
  alignment: ['H', 'V', 'P'],
  mapKey: Neutropolis.key,
  loc: [5182, -56, -457],
  badgeText: [{
    value: 'Lambda Sector is the core of the Imperial Defense Force\'s armaments and heavy machinery stockpile, fed daily by the anti-matter powered factories of Neutropolis.'
      + ' What is not immediately needed elsewhere is kept here for a \'rainy day.\'',
  }],
  notes: 'Located in [map:neutropolis] 217 yards NE of the Lambda Sector marker.',
  links: [
    { title: 'Stockpiling Badge', href: 'https://homecoming.wiki/wiki/Stockpiling_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png' }],
  vidiotMapKey: '6',
}
