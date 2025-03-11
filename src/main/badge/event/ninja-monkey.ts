import { BadgeData } from 'coh-content-db'

export const NinjaMonkey: BadgeData = {
  type: 'EVENT',
  key: 'ninja-monkey',
  setTitle: { id: 2245 },
  name: [
    { value: 'Ninja Monkey' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You defeated a total of 75 Ninjas and Monkeys during a single match in the Summer Blockbuster \'Time Gladiator\'.' },
  ],
  acquisition: 'In the Summer Blockbuster, defeat a total of 75 ninjas and monkeys during a single "Time Gladiator" match.',
  links: [
    { title: 'Ninja Monkey Badge', href: 'https://homecoming.wiki/wiki/Ninja_Monkey_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/ninja-monkey.png' }],
}
