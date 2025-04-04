import { BadgeData } from 'coh-content-db'

export const Blinding: BadgeData = {
  type: 'invention',
  key: 'blinding',
  setTitleId: [775],
  name: [{ value: 'Blinding' }],
  morality: 'all',
  badgeText: [{ value: 'You have memorized the following recipes at level 10: Sleep, Snare, Hold, Stun, Immobilize, and Fear.' }],
  links: [
    { title: 'Blinding Badge', href: 'https://homecoming.wiki/wiki/Blinding_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-1.png' }],
  requirements: [
    {
      key: 'a',
      type: 'invention',
      inventionLevel: 10,
      inventionTypes: ['sleep', 'slow', 'hold', 'stun', 'immobilize', 'fear'],
      count: 8,
    },
  ],
}
