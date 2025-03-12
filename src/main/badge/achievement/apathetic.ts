import { BadgeData } from 'coh-content-db'

export const Apathetic: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'apathetic',
  setTitle: { id: 2382 },
  name: [
    { value: 'Apathetic' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: `The world looks at your achievements in awe, but you remain impassive.` }],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/reject-insp.png' }],
  acquisition: 'Reject 500 inspiration drops',
  links: [
    { title: 'Apathetic Badge', href: 'https://homecoming.wiki/wiki/Apathetic_Badge' },
  ],
}
