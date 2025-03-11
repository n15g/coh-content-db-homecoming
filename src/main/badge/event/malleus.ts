import { BadgeData } from 'coh-content-db'

export const Malleus: BadgeData = {
  type: 'EVENT',
  key: 'malleus',
  setTitle: { id: 189 },
  name: [
    { value: 'Malleus' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You have defeated 75 witches, sorcerous crones who use dark magicks.' },
  ],
  acquisition: 'Defeat 75 Witches during the Halloween event.',
  links: [
    { title: 'Malleus Badge', href: 'https://homecoming.wiki/wiki/Malleus_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/malleus.png' }],
}
