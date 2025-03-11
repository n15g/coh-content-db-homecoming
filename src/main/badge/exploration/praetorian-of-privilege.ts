import { BadgeData } from 'coh-content-db'
import { ImperialCity } from '../../map/imperial-city'

export const PraetorianOfPrivilege: BadgeData = {
  type: 'EXPLORATION',
  key: 'praetorian-of-privilege',
  setTitle: { id: 1633 },
  name: [{ value: 'Praetorian of Privilege' }],
  alignment: ['H', 'V', 'P'],
  mapKey: ImperialCity.key,
  loc: [-1607, -13, 2426],
  badgeText: [{
    value: 'For those who have contributed greatly to the prosperity of Praetoria, they are given the opportunity to relocate to the rarified air of Four Gables; a place of luxury and comfort.',
  }],
  notes: 'Located in [map:imperial-city] 151 yards NNW of the Four Gables marker.',
  links: [
    { title: 'Praetorian of Privilege Badge', href: 'https://homecoming.wiki/wiki/Praetorian_of_Privilege_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png' }],
  vidiotMapKey: '4',
}
