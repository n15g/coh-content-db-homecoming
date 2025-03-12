import { BadgeData } from 'coh-content-db'

export const TheSlayer: BadgeData = {
  type: 'DEFEAT',
  key: 'the-slayer',
  setTitle: { id: 35 },
  name: [
    { value: 'The Slayer' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You are a slayer of the darkest of Vampyri.' },
  ],
  acquisition: 'Defeat 200 Council Vampyri',
  links: [
    { title: 'The Slayer Badge', href: 'https://homecoming.wiki/wiki/The_Slayer_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/council.png' },
  ],
}
