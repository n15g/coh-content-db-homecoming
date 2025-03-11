import { BadgeData } from 'coh-content-db'
import { SkywayCity } from '../../map/skyway-city'

export const Purifier: BadgeData = {
  type: 'EXPLORATION',
  key: 'purifier',
  setTitle: { id: 110 },
  name: [
    { alignment: 'H', value: 'Purifier' },
    { alignment: 'V', value: 'Defiler' },
  ],
  alignment: ['H'],
  mapKey: SkywayCity.key,
  loc: [-1085, -16, -7612],
  badgeText: [{
    value: 'Defiler, an evil spirit brought forth by the Devouring Earth, was defeated on this spot by Ms. Liberty... with a little help from MAGI.',
  }],
  notes: 'In the extreme northeast corner of Skyway City, between the two basketball courts.',
  links: [
    { title: 'Purifier Badge', href: 'https://homecoming.wiki/wiki/Purifier_Badge' },
    { title: 'Defiler Badge', href: 'https://homecoming.wiki/wiki/Defiler_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' }],
  vidiotMapKey: '1',
}
