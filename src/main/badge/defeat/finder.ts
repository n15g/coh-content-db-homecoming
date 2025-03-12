import { BadgeData } from 'coh-content-db'

export const Finder: BadgeData = {
  type: 'DEFEAT',
  key: 'finder',
  setTitle: { id: 51 },
  name: [
    { value: 'Finder' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You are beginning to uncover the mystery that is the Lost.' },
  ],
  acquisition: 'Defeat 100 The Lost bosses',
  links: [
    { title: 'Finder Badge', href: 'https://homecoming.wiki/wiki/Finder_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/finder.png' },
  ],
}
