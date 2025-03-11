import { BadgeData } from 'coh-content-db'

export const DeadHead: BadgeData = {
  type: 'EVENT',
  key: 'dead-head',
  setTitle: { id: 188 },
  name: [
    { value: 'Dead Head' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You have defeated 50 zombies, the walking flesh of the recently dead.' },
  ],
  acquisition: 'Defeat 50 Zombies during the Halloween event.',
  links: [
    { title: 'Dead Head Badge', href: 'https://homecoming.wiki/wiki/Dead_Head_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/dead-head.png' }],
}
