import { BadgeData } from 'coh-content-db'

export const Recognized: BadgeData = {
  type: 'AE',
  key: 'recognized',
  setTitle: { id: 1304 },
  name: [
    { value: 'Recognized' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: 'Another player has rated an arc that you\'ve published earning you the Recognized badge. This badge is awarded to all characters on your account.' }],
  acquisition: 'Another player has rated your published arc. (Account-wide)',
  links: [
    { title: 'Recognized Badge', href: 'https://homecoming.wiki/wiki/Recognized_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ae/recognized.png' }],
}
