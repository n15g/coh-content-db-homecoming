import { BadgeData } from 'coh-content-db'

export const Aloof: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'aloof',
  setTitle: { id: 2380 },
  name: [
    { value: 'Aloof' },
  ],
  alignment: ['H', 'V', 'P'],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/reject-insp.png' }],
  badgeText: [
    { value: 'Word of your accomplishments is spreading, but you don\'t seem to care much about it.' },
  ],
  acquisition: 'Reject 50 inspiration drops',
  links: [
    { title: 'Aloof Badge', href: 'https://homecoming.wiki/wiki/Aloof_Badge' },
  ],
}
