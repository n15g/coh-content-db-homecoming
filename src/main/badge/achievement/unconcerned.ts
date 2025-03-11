import { BadgeData } from 'coh-content-db'

export const Unconcerned: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'unconcerned',
  setTitle: { id: 2381 },
  name: [
    { value: 'Unconcerned' },
  ],
  alignment: ['H', 'V', 'P'],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/reject-insp.png' }],
  badgeText: [
    { value: 'Your skill and ability is recognized far and wide, but you appear quite indifferent.' },
  ],
  acquisition: 'Reject 100 inspiration drops',
  links: [
    { title: 'Unconcerned Badge', href: 'https://homecoming.wiki/wiki/Unconcerned_Badge' },
  ],
}
