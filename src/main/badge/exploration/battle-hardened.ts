import { BadgeData } from 'coh-content-db'
import { Cimerora } from '../../zone/cimerora'

export const BattleHardened: BadgeData = {
  type: 'exploration',
  key: 'battle-hardened',
  setTitleId: [2371],
  name: 'Battle-Hardened',
  morality: 'all',
  badgeText: `The loyal legions of Cimerora have prevailed in battle against an enemy wielding unimaginable power.`,
  zoneKey: Cimerora.key,
  loc: [-1084, 172.2, 4690],
  notes: `Located on a rampart overlooking the location where Imperious stands, 140 yards south of the Cimerora neighborhood marker.`,
  links: [
    { title: 'Battle-Hardened Badge', href: 'https://homecoming.wiki/wiki/Battle-Hardened_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  vidiotMapKey: '2',
}
