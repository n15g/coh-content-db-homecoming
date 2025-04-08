import { BadgeData } from 'coh-content-db'
import { ImperialCity } from '../../zone/imperial-city'

export const PraetorianOfPrivilege: BadgeData = {
  type: 'exploration',
  key: 'praetorian-of-privilege',
  setTitleId: [1633],
  name: 'Praetorian of Privilege',
  morality: 'all',
  badgeText: `For those who have contributed greatly to the prosperity of Praetoria, they are given the opportunity to relocate to the rarified air of Four Gables; a place of luxury and comfort.`,
  notes: `Located 151 yards NNW of the Four Gables marker.`,
  links: [
    { title: 'Praetorian of Privilege Badge', href: 'https://homecoming.wiki/wiki/Praetorian_of_Privilege_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: ImperialCity.key, coords: [-1607, -13, 2426] }, vidiotMapKey: '4' },
  ],
}
