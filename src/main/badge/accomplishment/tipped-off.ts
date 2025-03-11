import { BadgeData } from 'coh-content-db'

export const TippedOff: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'tipped-off',
  setTitle: { id: 1440 },
  name: [
    { value: 'Tipped Off' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You received your first tip earning yourself the Tipped Off badge.' },
  ],
  acquisition: 'Receive your first tip',
  links: [
    { title: 'Tipped Off Badge', href: 'https://homecoming.wiki/wiki/Tipped_Off_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/tipped-off.png' },
  ],
}
