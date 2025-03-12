import { BadgeData } from 'coh-content-db'
import { Cimerora } from '../../map/cimerora'

export const BattleHardened: BadgeData = {
  type: 'EXPLORATION',
  key: 'battle-hardened',
  setTitle: { id: 2371 },
  name: [{ value: 'Battle-Hardened' }],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: `The loyal legions of Cimerora have prevailed in battle against an enemy wielding unimaginable power.` }],
  mapKey: Cimerora.key,
  loc: [-1084, 172.2, 4690],
  notes: `Located in [map:cimerora] on a rampart overlooking the location where Imperious stands, 140 yards south of the Cimerora neighborhood marker.`,
  links: [
    { title: 'Battle-Hardened Badge', href: 'https://homecoming.wiki/wiki/Battle-Hardened_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  vidiotMapKey: '2',
}
