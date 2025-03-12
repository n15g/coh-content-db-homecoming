import { BadgeData } from 'coh-content-db'

export const IronWarrior: BadgeData = {
  type: 'EVENT',
  key: 'iron-warrior',
  setTitle: { id: 698 },
  name: [
    { value: 'Iron Warrior' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You have defeated the Halloween Jack in Irons.' },
  ],
  acquisition: 'Defeat Jack in Irons during the Halloween event.',
  links: [
    { title: 'Iron Warrior Badge', href: 'https://homecoming.wiki/wiki/Iron_Warrior_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/iron-warrior.png' }],
}
