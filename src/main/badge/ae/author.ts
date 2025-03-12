import { BadgeData } from 'coh-content-db'

export const Author: BadgeData = {
  type: 'AE',
  key: 'author',
  setTitle: { id: 1118 },
  name: [
    { value: 'Author' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: 'You\'ve earned the Author badge from having another player experience your published Mission Architect Story Arc! This badge is awarded to all characters on your account.' }],
  acquisition: 'Another player has completed your published arc. (Account-wide)',
  links: [
    { title: 'Author Badge', href: 'https://homecoming.wiki/wiki/Author_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ae/author.png' }],
}
