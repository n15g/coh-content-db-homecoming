import { BadgeData } from 'coh-content-db'

export const Buster: BadgeData = {
  type: 'EVENT',
  key: 'buster',
  setTitle: { id: 186 },
  name: [
    { value: 'Buster' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You have defeated 20 ghosts, spirits who have not rested since their original death.' },
  ],
  acquisition: 'Defeat 20 Spirits during the Halloween event.',
  links: [
    { title: 'Buster Badge', href: 'https://homecoming.wiki/wiki/Buster_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/buster.png' }],
}
