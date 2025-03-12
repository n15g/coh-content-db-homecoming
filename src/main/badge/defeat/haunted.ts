import { BadgeData } from 'coh-content-db'

export const Haunted: BadgeData = {
  type: 'DEFEAT',
  key: 'haunted',
  setTitle: { id: 436 },
  name: [
    { value: 'Haunted' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: 'You have banished hundreds of Ghosts from these lands.' },
  ],
  acquisition: 'Defeat 333 Croatoan Ghosts',
  links: [
    { title: 'Haunted Badge', href: 'https://homecoming.wiki/wiki/Haunted_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/haunted.png' },
  ],
}
