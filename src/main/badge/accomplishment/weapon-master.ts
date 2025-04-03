import { BadgeData } from 'coh-content-db'
import { Apex } from '../../contact/apex'

export const WeaponMaster: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'weapon-master',
  setTitle: { id: 1937 },
  name: [
    { sex: 'M', value: 'Weapon Master' },
    { sex: 'F', value: 'Warrior Princess' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: `You repelled the initial Praetorian invasion forces from Primal Earth and saved what remained of Blyde Square from Battle Maiden!`,
  links: [
    { title: 'Weapon Master Badge', href: 'https://homecoming.wiki/wiki/Weapon_Master_Badge' },
    { title: 'Warrior Princess Badge', href: 'https://homecoming.wiki/wiki/Warrior_Princess_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/weapon-master.png',
  requirements: [
    { key: 'atf', type: 'TASK_FORCE', missionName: 'Apex Task Force', contactKey: Apex.key },
  ],
}
