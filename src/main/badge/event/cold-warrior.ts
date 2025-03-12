import { BadgeData } from 'coh-content-db'

export const ColdWarrior: BadgeData = {
  type: 'EVENT',
  key: 'cold-warrior',
  setTitle: { id: 209 },
  name: [
    { value: 'Cold Warrior' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: 'You have defeated 100 of the living snow creatures who plague Paragon City.' },
    { alignment: 'V', value: 'You have defeated 100 of the living snow creatures who plagued the Rogue Isles.' },
  ],
  acquisition: 'Defeating 100 enemies in the Winter Horde during the Winter Event.',
  links: [
    { title: 'Cold Warrior Badge', href: 'https://homecoming.wiki/wiki/Cold_Warrior_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/cold-warrior.png' }],
}
