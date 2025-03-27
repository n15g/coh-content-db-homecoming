import { BadgeData, mapLink } from 'coh-content-db'
import { Warburg } from '../../map/warburg'

export const WeaponInspector: BadgeData = {
  type: 'EXPLORATION',
  key: 'weapon-inspector',
  setTitle: { id: 291 },
  name: [
    { alignment: 'H', value: 'Weapon Inspector' },
    { alignment: 'V', value: 'Weapon of Mass Destruction' },
  ],
  alignment: ['H', 'V', 'P'],
  mapKey: Warburg.key,
  loc: [-768, 144, 0],
  badgeText: [{ value: 'Warburg is home to many a nefarious ploy. Recluse\'s VENOM rocket is one of the most blatant.' }],
  notes: `The Weapon Inspector badge is located in ${mapLink(Warburg)}, in the center of the top of the western scaffolding surrounding the missile silo.`,
  links: [
    { title: 'Weapon Inspector Badge', href: 'https://homecoming.wiki/wiki/Weapon_Inspector_Badge' },
    { title: 'Weapon of Mass Destruction Badge', href: 'https://homecoming.wiki/wiki/Weapon_of_Mass_Destruction_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  vidiotMapKey: '1',
}
